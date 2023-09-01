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
        if (keys.size() == 0) {
            System.out.println("ERROR - specification key not found in loaded YAWL specifications.");
            return null;
        }else{
            speckey = keys.get(0).getKey();
        }

        // Retrieve all resource events and information
        List<Event> events = resourceLogManager.getAllResourceEvents(specId);
        Map<String, Participant> participantsInformationMap = new HashMap<>();
        for (Participant participant : resourceManager.getParticipants()) {
            participantsInformationMap.put(participant.getId(), participant);
        }
        Map<String, Set<Participant>> eventRelatedParticipants = new HashMap<>();
        Map<String, Set<Participant>> roleRelatedParticipants = new HashMap<>();
        // Map all resource events to separate case objects
        List<CaseDTO> cases = new ArrayList<>();
        mapEventsToCases(events, cases, speckey);

        // Fix task order in cases
        Map<String, String> smallestDecompositionOrders = new HashMap<>();
        Map<String, CaseStatisticDTO> caseStatisticMap = new HashMap<>();
        Map<String, Map<String, TaskTimingDTO>> taskTimings = new HashMap<>();
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
                if(extensionTask.getTaskid().equals(existingTask.getId())){
                    newTaskStatistic.setCostResourceHour(extensionTask.getCostResourceHour());
                    newTaskStatistic.setMaxQueueAge(extensionTask.getMaxQueueAge());
                    newTaskStatistic.setMaxTaskAge(extensionTask.getMaxTaskAge());
                }
            });
            taskStatistics.add(newTaskStatistic);
            taskTimings.put(existingTask.getId(), new HashMap<>());
        }
        ProcessLogRepairService.fixTaskOrder(cases, smallestDecompositionOrders, allExistingTasks, caseStatisticMap,
                taskTimings, eventRelatedParticipants, participantsInformationMap);

        SpecificationStatisticDTO specificationStatistic = new SpecificationStatisticDTO(specificationID, specversion, uri);
        // Specification performance
        List<Long> caseStartTimestamps = new ArrayList<>();
        measureSpecificationPerformance(cases, caseStatisticMap, caseStartTimestamps, specificationStatistic);

        // Task performance
        measureTaskPerformance(taskStatistics, allExistingTasks, taskTimings, caseStatisticMap,
                smallestDecompositionOrders, specId, specificationStatistic, participantsInformationMap);

        // Set final specification statistic data
        specificationStatistic.setSpeckey(speckey);
        specificationStatistic.setCaseStatisticDTOS(new ArrayList<>(caseStatisticMap.values()));
        specificationStatistic.setTaskStatisticDTOS(taskStatistics);
        List<AssociatedParticipants> eventAssociatedParticipantsList = eventRelatedParticipants.entrySet()
                .stream().map(entry -> new AssociatedParticipants(entry.getKey(), entry.getValue())).collect(Collectors.toList());
        Map<String, Set<Participant>> roleRelatedMap = new HashMap<>();
        eventRelatedParticipants.entrySet()
                .stream().filter(entry -> entry.getKey().equals("start") || entry.getKey().equals("complete")).forEach(entry ->{
                    entry.getValue().forEach(participant -> {
                        participant.getRoles().forEach(role -> {
                            if(!roleRelatedMap.containsKey(role.getName())){
                                roleRelatedMap.put(role.getName(), new HashSet<>());
                            }
                            roleRelatedMap.get(role.getName()).add(participant);
                        });
                    });
                });
        List<AssociatedParticipants> roleAssociatedParticipantsList = roleRelatedMap.entrySet()
                .stream().map(entry -> new AssociatedParticipants(entry.getKey(), entry.getValue())).collect(Collectors.toList());
        specificationStatistic.setEventAssociatedParticipants(eventAssociatedParticipantsList);
        specificationStatistic.setRoleAssociatedParticipants(roleAssociatedParticipantsList);
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
            long age = 0;
            if (caseStatisticDTO.getStart() == 0) {
                continue;
            }
            caseStartTimestamps.add(caseStatisticDTO.getStart());
            if(caseStatisticDTO.isCancelled()){
                age = caseStatisticDTO.getEnd() - caseStatisticDTO.getStart();
                unsuccessful++;
            }else if (caseStatisticDTO.getEnd() != 0) {
                age = caseStatisticDTO.getEnd() - caseStatisticDTO.getStart();
                successful++;
            } else {
                age = new Date().getTime() - caseStatisticDTO.getStart();
                successful++;
            }
            caseStatisticDTO.setAge(age);
            if(!caseStatisticDTO.isCancelled()){
                avgCaseCompletionTime += age;
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
                                        Map<String, Map<String, TaskTimingDTO>> taskTimings,
                                        Map<String, CaseStatisticDTO> caseStatisticMap,
                                        Map<String, String> smallestDecompositionOrders, YSpecificationID specId,
                                        SpecificationStatisticDTO specificationStatistic,
                                        Map<String, Participant> participantsInformationMap) {
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

            taskTimings.get(taskStatistic.getTaskid()).values()
                    .forEach(taskTimingDTO -> {
                        CaseStatisticDTO relatedCaseDTO = caseStatisticMap.get(taskTimingDTO.getCaseid());
                        taskTimingDTO.setName(taskStatistic.getName());
                        taskStatistic.setParticipants(Stream.of(taskStatistic.getParticipants(), taskTimingDTO.getParticipants())
                                .flatMap(map -> map.entrySet().stream())
                                .collect(Collectors.toMap(
                                        Map.Entry::getKey,
                                        e -> new HashSet<>(e.getValue()),
                                        (left, right) -> {
                                            left.addAll(right);
                                            return left;
                                        }
                                )));
                        taskStatistic.setAutomated(taskTimingDTO.isAutomated());

                        if(!relatedCaseDTO.isCancelled() && relatedCaseDTO.getEnd() != 0){
                            instancesPerCase.putIfAbsent(taskTimingDTO.getCaseid(), 0);
                            instancesPerCase.replace(taskTimingDTO.getCaseid(), instancesPerCase.get(taskTimingDTO.getCaseid()) + 1);
                        }

                        long creationTimestamp, queueTime, completionTime = 0, resourceTime = 0;
                        long cancelledEndTime = (taskTimingDTO.isCancelled()
                                && taskTimingDTO.getStartTimestamp() != 0L
                                && taskTimingDTO.getLatestEventTimestamp() != 0L
                                && taskTimingDTO.getLatestEventTimestamp() > taskTimingDTO.getStartTimestamp())?
                                taskTimingDTO.getLatestEventTimestamp() : 0;

                        // Creation
                        if (taskTimingDTO.getOfferedTimestamp() == 0L || taskTimingDTO.getAllocatedTimestamp() == 0L) {
                            creationTimestamp = Math.max(taskTimingDTO.getOfferedTimestamp(), taskTimingDTO.getAllocatedTimestamp());
                        } else {
                            creationTimestamp = Math.min(taskTimingDTO.getOfferedTimestamp(), taskTimingDTO.getAllocatedTimestamp());
                        }
                        if(taskTimingDTO.isAutomated() && creationTimestamp == 0L){
                            creationTimestamp = taskTimingDTO.getStartTimestamp();
                        }
                        taskTimingDTO.setCreated(creationTimestamp);

                        // Resource Time
                        if(taskTimingDTO.getStartTimestamp() != 0L && (taskTimingDTO.getEndTimestamp() != 0L || cancelledEndTime != 0)){
                            Long end = (taskTimingDTO.getEndTimestamp() != 0L)? taskTimingDTO.getEndTimestamp(): cancelledEndTime;
                            Long totalDays = (end - taskTimingDTO.getStartTimestamp()) / (1000 * 3600 * 24);
                            Date startDate = new Date(taskTimingDTO.getStartTimestamp());
                            Date endDate = new Date(end);
                            if (totalDays <= 1) {
                                resourceTime = end - taskTimingDTO.getStartTimestamp();
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
                            taskTimingDTO.setResourceTime(resourceTime);
                            avgResourceTime.addAndGet(resourceTime);
                            avgResourceTimeCounter.incrementAndGet();
                        }

                        // Queue time, Completion time, Case resource time
                        if(taskTimingDTO.isCancelled()){
                            if(taskTimingDTO.getStartTimestamp() == 0L){
                                queueTime = taskTimingDTO.getLatestEventTimestamp() - creationTimestamp;
                            }else{
                                queueTime = taskTimingDTO.getStartTimestamp() - creationTimestamp;
                                completionTime = taskTimingDTO.getLatestEventTimestamp() - taskTimingDTO.getStartTimestamp();
                            }
                        } else if (taskTimingDTO.getStartTimestamp() == 0L) {
                            queueTime = now - creationTimestamp;
                            if (!taskTimingDTO.isAutomated() && !taskTimingDTO.isCancelled()) {
                                relatedCaseDTO.getQueue().add(taskTimingDTO);
                                relatedCaseDTO.incQueuedWorkitemsCount();
                            }
                        } else {
                            queueTime = taskTimingDTO.getStartTimestamp() - creationTimestamp;
                            if (taskTimingDTO.getEndTimestamp() == 0L) {
                                completionTime = now - taskTimingDTO.getStartTimestamp();
                                if (!taskTimingDTO.isAutomated() && !taskTimingDTO.isCancelled()) {
                                    relatedCaseDTO.incRunningWorkitemsCount();
                                }
                            } else {
                                completionTime = taskTimingDTO.getEndTimestamp() - taskTimingDTO.getStartTimestamp();
                            }
                            if (!relatedCaseDTO.isCancelled() && !taskTimingDTO.isAutomated()) {
                                relatedCaseDTO.setResourceTime(relatedCaseDTO.getResourceTime() + resourceTime);
                            }

                            avgCompletionTime.addAndGet(completionTime);
                            avgCompletionTimeCounter.incrementAndGet();
                        }
                        taskTimingDTO.setQueueTime(queueTime);
                        taskTimingDTO.setCompletionTime(completionTime);
                        taskTimingDTO.setAge(queueTime + completionTime);

                        // Avg. queue time, Creation timestamps
                        if (!taskTimingDTO.isCancelled() && creationTimestamp == 0L) {
                            // this is the case for auto tasks
                            if (taskTimingDTO.getStartTimestamp() != 0L) {
                                creationTimestamps.add(taskTimingDTO.getStartTimestamp());
                            }
                        } else if(!taskTimingDTO.isCancelled()){
                            avgQueueTime.addAndGet(queueTime);
                            avgQueueTimeCounter.incrementAndGet();
                            creationTimestamps.add(creationTimestamp);
                        }

                        // Total resource time for role, capabilities and positions
                        if(resourceTime != 0){
                            for(Map.Entry<String, Set<String>> entries : taskTimingDTO.getParticipants().entrySet()){
                                if(entries.getValue().contains("Start")){
                                    Participant participant = participantsInformationMap.get(entries.getKey());

                                    for(Role role : participant.getRoles()){
                                        Map<String, Long> totalTimeSpentWithRoles = taskStatistic.getTotalTimeSpentWithRoles();
                                        if(!totalTimeSpentWithRoles.containsKey(role.getName())){
                                            totalTimeSpentWithRoles.put(role.getName(), 0L);
                                        }
                                        totalTimeSpentWithRoles.replace(role.getName(), totalTimeSpentWithRoles.get(role.getName()) + resourceTime);
                                    }

                                    for(Capability capability : participant.getCapabilities()){
                                        Map<String, Long> totalTimeSpentWithCapabilities = taskStatistic.getTotalTimeSpentWithCapabilities();
                                        if(!totalTimeSpentWithCapabilities.containsKey(capability.getName())){
                                            totalTimeSpentWithCapabilities.put(capability.getName(), 0L);
                                        }
                                        totalTimeSpentWithCapabilities.replace(capability.getName(), totalTimeSpentWithCapabilities.get(capability.getName()) + resourceTime);
                                    }

                                    for(Position position : participant.getPositions()){
                                        Map<String, Long> totalTimeSpentWithPositions = taskStatistic.getTotalTimeSpentWithPositions();
                                        if(!totalTimeSpentWithPositions.containsKey(position.getTitle())){
                                            totalTimeSpentWithPositions.put(position.getTitle(), 0L);
                                        }
                                        totalTimeSpentWithPositions.replace(position.getTitle(), totalTimeSpentWithPositions.get(position.getTitle()) + resourceTime);
                                    }
                                }
                            }
                        }
                    });



            if(instancesPerCase.values().size() > 0){
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
            // Save decompositionOrder
            taskStatistic.setDecompositionOrder(smallestDecompositionOrders.get(taskStatistic.getTaskid()));
            // Save automation
            if (taskStatistic.isAutomated()) {
                automatedTasks++;
            }
            // Avg. Capacity needed
            avgResourceTimePerWeekSummed += taskStatistic.getAvgResourceTime() * taskStatistic.getAvgOccurrencesPerWeek()[7];
            // Associated capabilities and roles
            taskStatistic.getParticipants().forEach((participantKey, events) -> {
                if(events.contains("Start") || events.contains("Complete")){
                    participantsInformationMap.get(participantKey).getCapabilities().forEach(capability -> {
                        Map<String, Integer> associatedCapabilities = taskStatistic.getAssociatedCapabilities();
                        if(!associatedCapabilities.containsKey(capability.getName())){
                            associatedCapabilities.put(capability.getName(), 0);
                        }
                        associatedCapabilities.replace(capability.getName(), associatedCapabilities.get(capability.getName()) + 1);
                    });
                    participantsInformationMap.get(participantKey).getRoles().forEach(role -> {
                        Map<String, Integer> associatedRoles = taskStatistic.getAssociatedRoles();
                        if(!associatedRoles.containsKey(role.getName())){
                            associatedRoles.put(role.getName(), 0);
                        }
                        associatedRoles.replace(role.getName(), associatedRoles.get(role.getName()) + 1);
                    });
                    participantsInformationMap.get(participantKey).getPositions().forEach(position -> {
                        Map<String, Integer> associatedPositions = taskStatistic.getAssociatedPositions();
                        if(!associatedPositions.containsKey(position.getTitle())){
                            associatedPositions.put(position.getTitle(), 0);
                        }
                        associatedPositions.replace(position.getTitle(), associatedPositions.get(position.getTitle()) + 1);
                    });
                }
            });
        }
        specificationStatistic.setAvgResourceTimePerWeekSummed(avgResourceTimePerWeekSummed);
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
                }else{
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