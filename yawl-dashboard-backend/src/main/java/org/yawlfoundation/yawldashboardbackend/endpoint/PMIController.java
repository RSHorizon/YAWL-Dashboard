package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionSpecificationDao;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionTaskDao;
import org.yawlfoundation.yawldashboardbackend.dto.*;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionTask;
import org.yawlfoundation.yawldashboardbackend.yawlclient.*;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.*;

import javax.transaction.Transactional;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author Robin Steinwarz
 */
@RestController
@Secured("ROLE_ADMIN")
public class PMIController {

    @Autowired
    private WorkItemManager workItemManager;

    @Autowired
    private ResourceManager resourceManager;
    @Autowired
    private ResourceLogManager resourceLogManager;
    @Autowired
    private ExtensionSpecificationDao extensionSpecificationDao;
    @Autowired
    private ExtensionTaskDao extensionTaskDao;

    @Autowired
    private SpecificationController specificationController;
    @Autowired
    InterfaceEManagerImpl interfaceEManager;

    @Autowired
    WsManagerImpl wsManager;

    @RequestMapping(value = "/api/statistic/specification/{uri}/{specificationID}/{specversion}", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public SpecificationStatisticDTO receiveSpecificationPMI(@PathVariable("specificationID") String specificationID,
                                                             @PathVariable("specversion") String specversion,
                                                             @PathVariable("uri") String uri) {
        // *** Gather all needed data in advance
        YSpecificationID specId = new YSpecificationID(specificationID, specversion, uri);

        // Retrieve speckey from specId
        List<Specification> specifications = interfaceEManager.getAllSpecifications();
        List<Specification> keys = specifications.stream().filter(c -> c.getUri().equals(uri)
                && c.getSpecversion().equals(specversion)
                && c.getId().equals(specificationID)).collect(Collectors.toList());
        String speckey = "";
        if (keys.size() != 0) {
            speckey = keys.get(0).getKey();
        }

        // Retrieve all resource events and information
        List<Event> events = resourceLogManager.getAllResourceEvents(specId);
        Map<String, Resource> resourcesInformationMap = new HashMap<>();
        for (Resource resource : resourceManager.getResources()) {
            resourcesInformationMap.put(resource.getId(), resource);
        }
        Map<String, Set<Resource>> eventRelatedResources = new HashMap<>();
        Map<String, Set<Resource>> roleRelatedResources = new HashMap<>();
        // Map all resource events to separate case objects
        List<CaseDTO> cases = new ArrayList<>();
        if(speckey != ""){
            mapEventsToCases(events, cases, speckey);
        }

        // Fix task order in cases
        Map<String, String> smallestOrders = new HashMap<>();
        Map<String, CaseStatisticDTO> caseStatisticMap = new HashMap<>();
        Map<String, Map<String, WorkitemDTO>> workitems = new HashMap<>();
        List<TaskStatisticDTO> taskStatistics = new ArrayList<>();
        // Prefill existing tasks
        List<Task> allExistingTasks = workItemManager.getSpecificationDefinitionById(specId);
        List<Role> roles = resourceManager.getRoles();
        List<Capability> capabilities = resourceManager.getCapabilities();
        List<Position> positions = resourceManager.getPositions();
        if (extensionSpecificationDao.findByComposedID(specificationID, specversion, uri) == null) {
            specificationController.createLocalEntities(specificationID, specversion, uri);
        }
        List<ExtensionTask> extensionTasks = extensionTaskDao.findAllByComposedID(specificationID, specversion, uri);
        for (Task existingTask : allExistingTasks) {
            TaskStatisticDTO newTaskStatistic = new TaskStatisticDTO(existingTask.getId());
            newTaskStatistic.setAutoOffer(existingTask.isAutoOffer());
            newTaskStatistic.setAutoAllocate(existingTask.isAutoAllocate());
            newTaskStatistic.setAutoStart(existingTask.isAutoStart());
            newTaskStatistic.setMinimalOrder(existingTask.getOrder());
            newTaskStatistic.setName(existingTask.getName());
            newTaskStatistic.setDemandedRoles(roles.stream().filter(role ->
                    existingTask.getDemandedRoles().contains(role.getId())).collect(Collectors.toSet()));
            newTaskStatistic.setDemandedCapabilities(capabilities.stream().filter(capability ->
                    existingTask.getDemandedCapabilities().contains(capability.getName())).collect(Collectors.toSet()));
            newTaskStatistic.setDemandedPositions(positions.stream().filter(position ->
                    existingTask.getDemandedPositions().contains(position.getTitle())).collect(Collectors.toSet()));
            extensionTasks.forEach(extensionTask -> {
                if (extensionTask.getTaskid().equals(existingTask.getId())) {
                    newTaskStatistic.setCostResourceHour(extensionTask.getCostResourceHour());
                    newTaskStatistic.setMaxQueueAge(extensionTask.getMaxQueueAge());
                    newTaskStatistic.setMaxTaskAge(extensionTask.getMaxTaskAge());
                }
            });
            taskStatistics.add(newTaskStatistic);
            workitems.put(existingTask.getId(), new HashMap<>());
        }
        ProcessLogRepairService.fixTaskOrder(cases, smallestOrders, allExistingTasks, caseStatisticMap,
                workitems, eventRelatedResources, resourcesInformationMap);

        SpecificationStatisticDTO specificationStatistic = new SpecificationStatisticDTO(specificationID, specversion, uri);
        // Specification performance
        List<Long> caseStartTimestamps = new ArrayList<>();
        measureSpecificationPerformance(cases, caseStatisticMap, caseStartTimestamps, specificationStatistic);

        // Task performance
        measureTaskPerformance(taskStatistics, allExistingTasks, workitems, caseStatisticMap,
                smallestOrders, specId, specificationStatistic, resourcesInformationMap);

        // Set final specification statistic data
        specificationStatistic.setSpeckey(speckey);
        specificationStatistic.setCaseStatisticDTOS(new ArrayList<>(caseStatisticMap.values()));
        specificationStatistic.setTaskStatisticDTOS(taskStatistics);
        List<AssocResources> eventAssocResourcesList = eventRelatedResources.entrySet()
                .stream().map(entry -> new AssocResources(entry.getKey(), entry.getValue())).collect(Collectors.toList());
        Map<String, Set<Resource>> roleRelatedMap = new HashMap<>();
        eventRelatedResources.entrySet()
                .stream().filter(entry -> entry.getKey().equals("start") || entry.getKey().equals("complete")).forEach(entry -> {
                    entry.getValue().forEach(resource -> {
                        resource.getRoles().forEach(role -> {
                            if (!roleRelatedMap.containsKey(role.getName())) {
                                roleRelatedMap.put(role.getName(), new HashSet<>());
                            }
                            roleRelatedMap.get(role.getName()).add(resource);
                        });
                    });
                });
        List<AssocResources> roleAssocResourcesList = roleRelatedMap.entrySet()
                .stream().map(entry -> new AssocResources(entry.getKey(), entry.getValue())).collect(Collectors.toList());
        specificationStatistic.setEventAssocResources(eventAssocResourcesList);
        specificationStatistic.setRoleAssocResources(roleAssocResourcesList);
        return specificationStatistic;
    }

    private void mapEventsToCases(List<Event> events, List<CaseDTO> cases, String speckey) {
        events.forEach(event -> {
            if (event.getSpeckey().equals(speckey)) {
                String pureCaseId = event.getCaseid().split("\\.")[0];
                // Ensure case object exists
                if (cases.stream().noneMatch(caseDTOInstance -> caseDTOInstance.getId().equals(event.getCaseid()
                        .split("\\.")[0]))) {
                    CaseDTO newCaseDTO = new CaseDTO(pureCaseId);
                    cases.add(newCaseDTO);
                }
                // Find relevant case
                CaseDTO associatedCaseDTO = cases.stream()
                        .filter(caseDTOInstance -> caseDTOInstance.getId().equals(pureCaseId))
                        .findFirst()
                        .get();
                // Add event to case object
                if (!event.getTaskid().equals("")) {
                    associatedCaseDTO.getTaskEvents().add(event);
                }
            }
        });

        for (CaseDTO caseInstance : cases) {
            List<Event> caseEvents = interfaceEManager.getCaseEvents(caseInstance.getId());
            caseInstance.setCaseEvents(caseEvents);
        }
    }

    private void measureSpecificationPerformance(List<CaseDTO> cases, Map<String, CaseStatisticDTO> caseStatisticMap,
                                                 List<Long> caseStartTimestamps, SpecificationStatisticDTO specificationStatistic) {
        int successful = 0;
        int unsuccessful = 0;
        long avgCaseCompletionTime = 0L;
        long avgCaseCompletionTimeCounter = 0L;

        for (CaseDTO caseDTOInstance : cases) {
            CaseStatisticDTO caseStatisticDTO = caseStatisticMap.get(caseDTOInstance.getId());
            long leadTime = 0;
            if (caseStatisticDTO.getStart() == 0) {
                continue;
            }
            caseStartTimestamps.add(caseStatisticDTO.getStart());
            if (caseStatisticDTO.isCancelled()) {
                leadTime = caseStatisticDTO.getEnd() - caseStatisticDTO.getStart();
                unsuccessful++;
            } else if (caseStatisticDTO.getEnd() != 0) {
                leadTime = caseStatisticDTO.getEnd() - caseStatisticDTO.getStart();
                successful++;
            } else {
                leadTime = new Date().getTime() - caseStatisticDTO.getStart();
                successful++;
            }
            caseStatisticDTO.setLeadTime(leadTime);
            if (!caseStatisticDTO.isCancelled()) {
                avgCaseCompletionTime += leadTime;
                avgCaseCompletionTimeCounter++;
            }
        }
        if (avgCaseCompletionTimeCounter != 0) {
            avgCaseCompletionTime /= avgCaseCompletionTimeCounter;
        }

        // Occurrences per week divided by weeks, where case occurred
        Integer[] caseOccurrencesPerDayOfWeek = PMIControllerUtil.occurrencesInWeeks(caseStartTimestamps);

        specificationStatistic.setAvgCaseCompletionTime(avgCaseCompletionTime);
        specificationStatistic.setSuccessfulCases(successful);
        specificationStatistic.setUnsuccessfulCases(unsuccessful);
        specificationStatistic.setCaseOccurrencesPerDayOfWeek(caseOccurrencesPerDayOfWeek);
    }

    private void measureTaskPerformance(List<TaskStatisticDTO> taskStatistics, List<Task> allExistingTasks,
                                        Map<String, Map<String, WorkitemDTO>> workitems,
                                        Map<String, CaseStatisticDTO> caseStatisticMap,
                                        Map<String, String> smallestOrders, YSpecificationID specId,
                                        SpecificationStatisticDTO specificationStatistic,
                                        Map<String, Resource> resourcesInformationMap) {
        final long now = new Date().getTime();
        for (TaskStatisticDTO taskStatistic : taskStatistics) {
            List<Long> creationTimestamps = new ArrayList<>();
            AtomicLong avgQueueTime = new AtomicLong();
            AtomicLong avgQueueTimeCounter = new AtomicLong();
            AtomicLong avgCompletionTime = new AtomicLong();
            AtomicLong avgCompletionTimeCounter = new AtomicLong();
            AtomicLong avgResourceTime = new AtomicLong();
            AtomicLong avgResourceTimeCounter = new AtomicLong();
            Map<String, Integer> instancesPerCase = new HashMap<>();

            workitems.get(taskStatistic.getTaskid()).values()
                    .forEach(workitemDTO -> {
                        CaseStatisticDTO relatedCaseDTO = caseStatisticMap.get(workitemDTO.getCaseid());
                        workitemDTO.setName(taskStatistic.getName());
                        taskStatistic.setResources(Stream.of(taskStatistic.getResources(), workitemDTO.getResources())
                                .flatMap(map -> map.entrySet().stream())
                                .collect(Collectors.toMap(
                                        Map.Entry::getKey,
                                        e -> new HashSet<>(e.getValue()),
                                        (left, right) -> {
                                            left.addAll(right);
                                            return left;
                                        }
                                )));
                        taskStatistic.setAutomated(workitemDTO.isAutomated());

                        if (!relatedCaseDTO.isCancelled() && relatedCaseDTO.getEnd() != 0) {
                            instancesPerCase.putIfAbsent(workitemDTO.getCaseid(), 0);
                            instancesPerCase.replace(workitemDTO.getCaseid(), instancesPerCase.get(workitemDTO.getCaseid()) + 1);
                        }

                        long creationTimestamp, queueTime, completionTime = 0, resourceTime = 0;
                        long cancelledEndTime = (workitemDTO.isCancelled()
                                && workitemDTO.getStartTimestamp() != 0L
                                && workitemDTO.getLatestEventTimestamp() != 0L
                                && workitemDTO.getLatestEventTimestamp() > workitemDTO.getStartTimestamp()) ?
                                workitemDTO.getLatestEventTimestamp() : 0;

                        // Creation
                        if (workitemDTO.getOfferedTimestamp() == 0L || workitemDTO.getAllocatedTimestamp() == 0L) {
                            creationTimestamp = Math.max(workitemDTO.getOfferedTimestamp(), workitemDTO.getAllocatedTimestamp());
                        } else {
                            creationTimestamp = Math.min(workitemDTO.getOfferedTimestamp(), workitemDTO.getAllocatedTimestamp());
                        }
                        if (workitemDTO.isAutomated() && creationTimestamp == 0L) {
                            creationTimestamp = workitemDTO.getStartTimestamp();
                        }
                        workitemDTO.setCreated(creationTimestamp);

                        // Resource Time
                        if (workitemDTO.getStartTimestamp() != 0L && (workitemDTO.getEndTimestamp() != 0L || cancelledEndTime != 0)) {
                            Long end = (workitemDTO.getEndTimestamp() != 0L) ? workitemDTO.getEndTimestamp() : cancelledEndTime;
                            Long totalDays = (end - workitemDTO.getStartTimestamp()) / (1000 * 3600 * 24);
                            Date startDate = new Date(workitemDTO.getStartTimestamp());
                            Date endDate = new Date(end);
                            if (totalDays <= 1) {
                                resourceTime = end - workitemDTO.getStartTimestamp();
                            } else {
                                // die Zeit bis 20 Uhr
                                int startDayEnd = 20;
                                int hoursStart = startDate.getHours();
                                if (hoursStart < startDayEnd) {
                                    resourceTime += (startDayEnd * 60 * 60 * 1000) - ((hoursStart * 60 * 60 * 1000) + (startDate.getMinutes() * 60 * 1000) + (startDate.getSeconds() * 1000));
                                }

                                // die Zeit von 8Uhr
                                int endDayStart = 8;
                                int hoursEnd = endDate.getHours();
                                if (hoursEnd > endDayStart) {
                                    resourceTime += ((hoursEnd * 60 * 60 * 1000) + (endDate.getMinutes() * 60 * 1000) + (endDate.getSeconds() * 1000)) - (endDayStart * 60 * 60 * 1000);
                                }

                                if (totalDays > 2) {
                                    resourceTime += (totalDays - 2) * (8 * 60 * 60 * 1000);
                                }
                            }
                            workitemDTO.setResourceTime(resourceTime);
                            avgResourceTime.addAndGet(resourceTime);
                            avgResourceTimeCounter.incrementAndGet();
                        }

                        // Queue time, Completion time, Case resource time
                        if (workitemDTO.isCancelled()) {
                            if (workitemDTO.getStartTimestamp() == 0L) {
                                queueTime = workitemDTO.getLatestEventTimestamp() - creationTimestamp;
                            } else {
                                queueTime = workitemDTO.getStartTimestamp() - creationTimestamp;
                                completionTime = workitemDTO.getLatestEventTimestamp() - workitemDTO.getStartTimestamp();
                            }
                        } else if (workitemDTO.getStartTimestamp() == 0L) {
                            queueTime = now - creationTimestamp;
                            if (!workitemDTO.isAutomated() && !workitemDTO.isCancelled()) {
                                relatedCaseDTO.getQueue().add(workitemDTO);
                                relatedCaseDTO.incQueuedWorkitemsCount();
                            }
                        } else {
                            queueTime = workitemDTO.getStartTimestamp() - creationTimestamp;
                            if (workitemDTO.getEndTimestamp() == 0L) {
                                completionTime = now - workitemDTO.getStartTimestamp();
                                if (!workitemDTO.isAutomated() && !workitemDTO.isCancelled()) {
                                    relatedCaseDTO.incRunningWorkitemsCount();
                                }
                            } else {
                                completionTime = workitemDTO.getEndTimestamp() - workitemDTO.getStartTimestamp();
                            }
                            if (!relatedCaseDTO.isCancelled() && !workitemDTO.isAutomated()) {
                                relatedCaseDTO.setResourceTime(relatedCaseDTO.getResourceTime() + resourceTime);
                            }

                            avgCompletionTime.addAndGet(completionTime);
                            avgCompletionTimeCounter.incrementAndGet();
                        }
                        workitemDTO.setQueueTime(queueTime);
                        workitemDTO.setCompletionTime(completionTime);
                        workitemDTO.setLeadTime(queueTime + completionTime);

                        // Avg. queue time, Creation timestamps
                        if (!workitemDTO.isCancelled() && creationTimestamp == 0L) {
                            // this is the case for auto tasks
                            if (workitemDTO.getStartTimestamp() != 0L) {
                                creationTimestamps.add(workitemDTO.getStartTimestamp());
                            }
                        } else if (!workitemDTO.isCancelled()) {
                            avgQueueTime.addAndGet(queueTime);
                            avgQueueTimeCounter.incrementAndGet();
                            creationTimestamps.add(creationTimestamp);
                        }

                        // Total resource time for role, capabilities and positions
                        if (resourceTime != 0) {
                            for (Map.Entry<String, Set<String>> entries : workitemDTO.getResources().entrySet()) {
                                if (entries.getValue().contains("Start")) {
                                    Resource resource = resourcesInformationMap.get(entries.getKey());

                                    for (Role role : resource.getRoles()) {
                                        Map<String, Long> totalTimeSpentWithRoles = taskStatistic.getAssocRoleTime();
                                        if (!totalTimeSpentWithRoles.containsKey(role.getName())) {
                                            totalTimeSpentWithRoles.put(role.getName(), 0L);
                                        }
                                        totalTimeSpentWithRoles.replace(role.getName(), totalTimeSpentWithRoles.get(role.getName()) + resourceTime);
                                    }

                                    for (Capability capability : resource.getCapabilities()) {
                                        Map<String, Long> totalTimeSpentWithCapabilities = taskStatistic.getAssocCapabilityTime();
                                        if (!totalTimeSpentWithCapabilities.containsKey(capability.getName())) {
                                            totalTimeSpentWithCapabilities.put(capability.getName(), 0L);
                                        }
                                        totalTimeSpentWithCapabilities.replace(capability.getName(), totalTimeSpentWithCapabilities.get(capability.getName()) + resourceTime);
                                    }

                                    for (Position position : resource.getPositions()) {
                                        Map<String, Long> totalTimeSpentWithPositions = taskStatistic.getAssocPositionTime();
                                        if (!totalTimeSpentWithPositions.containsKey(position.getTitle())) {
                                            totalTimeSpentWithPositions.put(position.getTitle(), 0L);
                                        }
                                        totalTimeSpentWithPositions.replace(position.getTitle(), totalTimeSpentWithPositions.get(position.getTitle()) + resourceTime);
                                    }
                                }
                            }
                        }
                    });


            if (instancesPerCase.values().size() > 0) {
                int relevantCasesCount = (int) caseStatisticMap.values().stream()
                        .filter(a -> !a.isCancelled() && a.getEnd() != 0).count();
                taskStatistic.setAvgInstancesPerCase((double) instancesPerCase.values().stream().reduce(Integer::sum).get()
                        / relevantCasesCount);
            }

            if (avgQueueTimeCounter.get() != 0) {
                // Avg. queue time of task
                taskStatistic.setAvgQueueTime(avgQueueTime.get() / avgQueueTimeCounter.get());
            }
            if (avgCompletionTimeCounter.get() != 0) {
                // Avg. completion time of task
                taskStatistic.setAvgCompletionTime(avgCompletionTime.get() / avgCompletionTimeCounter.get());
            }
            if (avgResourceTimeCounter.get() != 0) {
                // Avg. completion time of task
                taskStatistic.setAvgResourceTime(avgResourceTime.get() / avgResourceTimeCounter.get());
            }
            // Avg. occurences/week
            taskStatistic.setAvgOccurrencesPerWeek(PMIControllerUtil.occurrencesInWeeks(creationTimestamps));
        }

        long avgResourceTimePerWeekSummed = 0;
        double automatedTasks = 0;
        for (TaskStatisticDTO taskStatistic : taskStatistics) {
            // Save order
            taskStatistic.setOrder(smallestOrders.get(taskStatistic.getTaskid()));
            // Save automation
            if (taskStatistic.isAutomated()) {
                automatedTasks++;
            }
            // Avg. Capacity needed
            avgResourceTimePerWeekSummed += taskStatistic.getAvgResourceTime() * taskStatistic.getAvgOccurrencesPerWeek()[7];
            // Associated capabilities and roles
            taskStatistic.getResources().forEach((resourceKey, events) -> {
                if (events.contains("Start") || events.contains("Complete")) {
                    resourcesInformationMap.get(resourceKey).getCapabilities().forEach(capability -> {
                        Map<String, Integer> associatedCapabilities = taskStatistic.getAssocCapabilities();
                        if (!associatedCapabilities.containsKey(capability.getName())) {
                            associatedCapabilities.put(capability.getName(), 0);
                        }
                        associatedCapabilities.replace(capability.getName(), associatedCapabilities.get(capability.getName()) + 1);
                    });
                    resourcesInformationMap.get(resourceKey).getRoles().forEach(role -> {
                        Map<String, Integer> associatedRoles = taskStatistic.getAssocRoles();
                        if (!associatedRoles.containsKey(role.getName())) {
                            associatedRoles.put(role.getName(), 0);
                        }
                        associatedRoles.replace(role.getName(), associatedRoles.get(role.getName()) + 1);
                    });
                    resourcesInformationMap.get(resourceKey).getPositions().forEach(position -> {
                        Map<String, Integer> associatedPositions = taskStatistic.getAssocPositions();
                        if (!associatedPositions.containsKey(position.getTitle())) {
                            associatedPositions.put(position.getTitle(), 0);
                        }
                        associatedPositions.replace(position.getTitle(), associatedPositions.get(position.getTitle()) + 1);
                    });
                }
            });
        }
        specificationStatistic.setAvgWeeklyResourceTime(avgResourceTimePerWeekSummed);
        specificationStatistic.setAutomationPercentage(automatedTasks / taskStatistics.size());

        // Avg. Time to reach of task
        taskStatistics = taskStatistics.stream().sorted(Comparator.comparing(TaskStatisticDTO::getMinimalOrder)).collect(Collectors.toList());
        String currentOrder = "";
        long additiveAvgTimeToReach = 0;
        List<Long> equalOrdersAvgAges = new ArrayList<>();
        for (TaskStatisticDTO taskStatisticDTO : taskStatistics) {
            if (currentOrder == null || taskStatisticDTO == null) {
                continue;
            }
            long avgTaskAge = Math.round((taskStatisticDTO.getAvgQueueTime() + taskStatisticDTO.getAvgCompletionTime()) * taskStatisticDTO.getAvgInstancesPerCase());
            if (!currentOrder.equals(taskStatisticDTO.getMinimalOrder())) {
                if (equalOrdersAvgAges.size() > 0) {
                    long highestEqualEncounter = equalOrdersAvgAges.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList()).get(0);
                    additiveAvgTimeToReach += highestEqualEncounter;
                    equalOrdersAvgAges = new ArrayList<>();
                    taskStatisticDTO.setAvgTimeToReach(additiveAvgTimeToReach);
                } else {
                    taskStatisticDTO.setAvgTimeToReach(additiveAvgTimeToReach);
                    additiveAvgTimeToReach += avgTaskAge;
                }
                currentOrder = taskStatisticDTO.getMinimalOrder();
                equalOrdersAvgAges.add(avgTaskAge);
            } else {
                equalOrdersAvgAges.add(avgTaskAge);
                taskStatisticDTO.setAvgTimeToReach(additiveAvgTimeToReach);
            }
        }

    }


}
