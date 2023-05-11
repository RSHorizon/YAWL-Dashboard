package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionSpecificationDao;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionTaskDao;
import org.yawlfoundation.yawldashboardbackend.dto.*;
import org.yawlfoundation.yawldashboardbackend.model.SpecificationId;
import org.yawlfoundation.yawldashboardbackend.yawlclient.*;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Participant;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Task;

import javax.transaction.Transactional;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@RestController
@Secured("ROLE_ADMIN")
public class StatisticController {

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
    InterfaceEManagerImpl interfaceEManager;

    @Autowired
    WsManagerImpl wsManager;

    @RequestMapping(value = "/api/statistic/specification/{uri}/{specificationID}/{specversion}", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public SpecificationStatisticDTO processSpecificationStatistic(@PathVariable("specificationID") String specificationID,
                                                                   @PathVariable("specversion") String specversion,
                                                                   @PathVariable("uri") String uri) {
        // *** Gather all needed data in advance
        YSpecificationID specId = new YSpecificationID(specificationID, specversion, uri);
        // Retrieve speckey from specId
        List<Specification> specifications = interfaceEManager.getAllSpecifications();
        String speckey = specifications.stream().filter(c -> c.getUri().equals(uri)
                && c.getSpecversion().equals(specversion)
                && c.getId().equals(specificationID)).collect(Collectors.toList()).get(0).getKey();
        if (speckey == null) {
            System.out.println("ERROR - specification key not found in loaded YAWL specifications.");
        }

        // Retrieve all resource events and information
        List<Event> events = resourceLogManager.getAllResourceEvents(specId);
        Map<String, Participant> participantsInformationMap = new HashMap<>();
        for (Participant participant : resourceManager.getParticipants()) {
            participantsInformationMap.put(participant.getId(), participant);
        }
        Set<String> relatedParticipantIDs = new HashSet<>();

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
        for(Task existingTask : allExistingTasks){
            taskStatistics.add(new TaskStatisticDTO(existingTask.getId()));
            taskTimings.put(existingTask.getId(), new HashMap<>());
        }
        StatisticEventRepairService.fixTaskOrder(cases, smallestDecompositionOrders, allExistingTasks, caseStatisticMap,
                taskTimings, relatedParticipantIDs);

        SpecificationStatisticDTO specificationStatistic = new SpecificationStatisticDTO(specificationID, specversion, uri);
        // Specification performance
        List<Long> caseStartTimestamps = new ArrayList<>();
        measureSpecificationPerformance(cases, caseStatisticMap, caseStartTimestamps, specificationStatistic);

        // Task performance
        measureTaskPerformance(taskStatistics, allExistingTasks, taskTimings, caseStatisticMap,
                smallestDecompositionOrders, specId, specificationStatistic);

        // Set final specification statistic data
        specificationStatistic.setSpeckey(speckey);
        specificationStatistic.setCaseStatisticDTOS(new ArrayList<>(caseStatisticMap.values()));
        specificationStatistic.setTaskStatisticDTOS(taskStatistics);
        specificationStatistic.getParticipants().addAll(
                relatedParticipantIDs.stream()
                        .map(participantsInformationMap::get).filter(Objects::nonNull)
                        .collect(Collectors.toList())
        );

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

        for(CaseDTO caseInstance: cases){
            List<Event> caseEvents = interfaceEManager.getCaseEvents(caseInstance.getId());
            caseInstance.setCaseEvents(caseEvents);
        }
    }

    private void measureSpecificationPerformance(List<CaseDTO> cases, Map<String, CaseStatisticDTO> caseStatisticMap,
                                                 List<Long> caseStartTimestamps, SpecificationStatisticDTO specificationStatistic){
        long avgCaseCompletionTime = 0L;
        int successful = 0;
        int unsuccessful = 0;
        int casesImpactingCompletionTimeCount = 0;

        for (CaseDTO caseDTOInstance : cases) {
            CaseStatisticDTO caseStatisticDTO = caseStatisticMap.get(caseDTOInstance.getId());

            if (caseStatisticDTO.getStart() == 0) {
                continue;
            }
            caseStartTimestamps.add(caseStatisticDTO.getStart());
            if (caseStatisticDTO.isCancelled()) {
                unsuccessful++;
                continue;
            }
            casesImpactingCompletionTimeCount++;
            if (caseStatisticDTO.getEnd() != 0) {
                caseStatisticDTO.setAge(caseStatisticDTO.getEnd() - caseStatisticDTO.getStart());
                avgCaseCompletionTime += caseStatisticDTO.getEnd() - caseStatisticDTO.getStart();
                successful++;
            } else {
                caseStatisticDTO.setAge(new Date().getTime() - caseStatisticDTO.getStart());
                avgCaseCompletionTime += new Date().getTime() - caseStatisticDTO.getStart();
            }
        }
        if (casesImpactingCompletionTimeCount != 0) {
            avgCaseCompletionTime /= casesImpactingCompletionTimeCount;
        }

        // Occurrences per week divided by weeks, where case occurred
        Integer[] caseOccurrencesPerDayOfWeek = StatisticControllerHelper.occurrencesInWeeks(caseStartTimestamps);

        specificationStatistic.setAvgCaseCompletionTime(avgCaseCompletionTime);
        specificationStatistic.setSuccessfulCases(successful);
        specificationStatistic.setUnsuccessfulCases(unsuccessful);
        specificationStatistic.setCaseOccurrencesPerDayOfWeek(caseOccurrencesPerDayOfWeek);
    }

    private void measureTaskPerformance(List<TaskStatisticDTO> taskStatistics, List<Task> allExistingTasks,
                                        Map<String, Map<String, TaskTimingDTO>> taskTimings,
                                        Map<String, CaseStatisticDTO> caseStatisticMap,
                                        Map<String, String> smallestDecompositionOrders, YSpecificationID specId,
                                        SpecificationStatisticDTO specificationStatistic){
        final long now = new Date().getTime();
        for (TaskStatisticDTO taskStatistic : taskStatistics) {

            List<Long> creationTimestamps = new ArrayList<>();
            AtomicLong avgQueueTime = new AtomicLong();
            AtomicLong avgQueueTimeCounter = new AtomicLong();
            AtomicLong avgCompletionTime = new AtomicLong();
            AtomicLong avgCompletionTimeCounter = new AtomicLong();

            taskTimings.get(taskStatistic.getTaskid()).values().stream()
                    .filter(taskTimingDTO -> !taskTimingDTO.isCancelled())
                    .forEach(taskTimingDTO -> {
                        CaseStatisticDTO relatedCaseDTO = caseStatisticMap.get(taskTimingDTO.getCaseid());
                        long creationTimestamp, queueTime, completionTime = 0;

                        taskStatistic.setParticipants(taskTimingDTO.getParticipants());

                        // one of the offered or allocated times must be set
                        if (taskTimingDTO.getOfferedTimestamp() == 0L || taskTimingDTO.getAllocatedTimestamp() == 0L) {
                            creationTimestamp = Math.max(taskTimingDTO.getOfferedTimestamp(), taskTimingDTO.getAllocatedTimestamp());
                        } else {
                            creationTimestamp = Math.min(taskTimingDTO.getOfferedTimestamp(), taskTimingDTO.getAllocatedTimestamp());
                        }

                        if (taskTimingDTO.getStartTimestamp() == 0L) {
                            queueTime = now - creationTimestamp;
                            if (!taskTimingDTO.isAutomated() && !taskTimingDTO.isCancelled()) {
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
                            if(!relatedCaseDTO.isCancelled() && !taskTimingDTO.isAutomated()){
                                relatedCaseDTO.setResourceTime(relatedCaseDTO.getResourceTime() + completionTime);
                            }

                            avgCompletionTime.addAndGet(completionTime);
                            avgCompletionTimeCounter.incrementAndGet();
                        }

                        if (taskTimingDTO.getOfferedTimestamp() == 0L && taskTimingDTO.getAllocatedTimestamp() == 0L) {
                            // this is the case fot autotasks
                            if (taskTimingDTO.getStartTimestamp() != 0L) {
                                creationTimestamps.add(taskTimingDTO.getStartTimestamp());
                            }
                        } else {
                            avgQueueTime.addAndGet(queueTime);
                            avgQueueTimeCounter.incrementAndGet();
                            creationTimestamps.add(creationTimestamp);
                        }
                    });

            if (avgQueueTimeCounter.get() != 0) {
                // Avg. queue time of task
                taskStatistic.setAvgQueueTime(avgQueueTime.get() / avgQueueTimeCounter.get());
            }
            if (avgCompletionTimeCounter.get() != 0) {
                // Avg. completion time of task
                taskStatistic.setAvgCompletionTime(avgCompletionTime.get() / avgCompletionTimeCounter.get());
            }
            // Avg. occurences/week
            taskStatistic.setAvgOccurrencesPerWeek(StatisticControllerHelper.occurrencesInWeeks(creationTimestamps));
        }

        long avgResourceTimePerWeekSummed = 0;
        for (TaskStatisticDTO taskStatisticDTO : taskStatistics) {
            // Save decompositionOrder
            taskStatisticDTO.setDecompositionOrder(smallestDecompositionOrders.get(taskStatisticDTO.getTaskid()));

            // Avg. Capacity needed
            avgResourceTimePerWeekSummed += taskStatisticDTO.getAvgCompletionTime() * taskStatisticDTO.getAvgOccurrencesPerWeek()[7];
        }
        specificationStatistic.setAvgResourceTimePerWeekSummed(avgResourceTimePerWeekSummed);

        // Avg. Time to reach of task
        taskStatistics = taskStatistics.stream().sorted().collect(Collectors.toList());
        String currentDecomposition = "";
        long additiveAvgTimeToReach = 0;
        long additiveAvgTimeToReachStep = 0;
        int additiveAvgTimeToReachStepCounter = 0;
        for (TaskStatisticDTO taskStatisticDTO : taskStatistics) {
            if (currentDecomposition == null || taskStatisticDTO == null) {
                continue;
            }
            // TimeToReach
            if (!currentDecomposition.equals(taskStatisticDTO.getDecompositionOrder())) {
                if (additiveAvgTimeToReachStepCounter != 0) {
                    additiveAvgTimeToReach += additiveAvgTimeToReachStep / additiveAvgTimeToReachStepCounter;
                    additiveAvgTimeToReachStep = 0;
                    additiveAvgTimeToReachStepCounter = 0;
                }
                currentDecomposition = taskStatisticDTO.getDecompositionOrder();
                taskStatisticDTO.setAvgTimeToReach(additiveAvgTimeToReach);
                additiveAvgTimeToReachStep += taskStatisticDTO.getAvgQueueTime() + taskStatisticDTO.getAvgCompletionTime();
                additiveAvgTimeToReachStepCounter++;
            } else {
                additiveAvgTimeToReachStep += taskStatisticDTO.getAvgQueueTime() + taskStatisticDTO.getAvgCompletionTime();
                additiveAvgTimeToReachStepCounter++;
                taskStatisticDTO.setAvgTimeToReach(additiveAvgTimeToReach);
            }
        }

    }



}
