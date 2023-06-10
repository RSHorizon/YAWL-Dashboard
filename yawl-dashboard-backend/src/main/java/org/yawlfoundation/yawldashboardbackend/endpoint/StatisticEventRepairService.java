package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.yawlfoundation.yawldashboardbackend.dto.CaseDTO;
import org.yawlfoundation.yawldashboardbackend.dto.CaseStatisticDTO;
import org.yawlfoundation.yawldashboardbackend.dto.TaskTimingDTO;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Participant;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Task;

import java.util.*;

public class StatisticEventRepairService {

    protected static void fixTaskOrder(List<CaseDTO> cases, Map<String, String> smallestDecompositionOrders,
                                       List<Task> allExistingTasks,
                                       Map<String, CaseStatisticDTO> caseStatisticMap,
                                       Map<String, Map<String, TaskTimingDTO>> taskTimings,
                                       Map<String, Set<Participant>> eventRelatedParticipants,
                                       Map<String, Participant> participantsInformationMap) {
        for (CaseDTO caseInstance : cases) {
            // Initiate case statistic per case and get it
            caseStatisticMap.put(caseInstance.getId(), new CaseStatisticDTO(caseInstance.getId()));
            CaseStatisticDTO caseStatisticDTO = caseStatisticMap.get(caseInstance.getId());

            // Repair case data for first offer/allocation/cancelled_by_case events
            Map<String, String> baseline = new HashMap<>();
            Map<String, List<Event>> baselineEvents = new HashMap<>();
            Map<String, Set<String>> excluded = new HashMap<>();
            for (Event event : caseInstance.getTaskEvents()) {
                // Misc
                String eventDecompositionOrder = event.getCaseid().replaceFirst("\\A\\w+[0-9][\\.]?", "");
                updateSmallestDecompositionOrder(event, eventDecompositionOrder, smallestDecompositionOrders);
                if (!eventRelatedParticipants.containsKey(event.getEventtype())) {
                    eventRelatedParticipants.put(event.getEventtype(), new HashSet<>());
                }
                eventRelatedParticipants.get(event.getEventtype()).add(participantsInformationMap.get(event.getResourceid()));
                // Update baseline
                if (!baseline.containsKey(event.getTaskid())) {
                    baseline.put(event.getTaskid(), null);
                    baselineEvents.put(event.getTaskid(), new ArrayList<>());
                    excluded.put(event.getTaskid(), new HashSet<>());
                }
                List<Event> localBaselineEvents = baselineEvents.get(event.getTaskid());
                Set<String> localExcluded = excluded.get(event.getTaskid());
                // Handle baseline Events
                String[] resourceEvents = {"offer", "unoffer", "allocate", "deallocate"};
                String[] cancelEvents = {"cancelled_by_case", "cancel"};
                boolean notExcluded = !localExcluded.contains(eventDecompositionOrder);
                if (Arrays.asList(resourceEvents).contains(event.getEventtype())) {
                    if (baseline.get(event.getTaskid()) == null && notExcluded) {
                        baseline.replace(event.getTaskid(), eventDecompositionOrder);
                        localBaselineEvents.add(event);
                    }
                    if (eventDecompositionOrder.equals(baseline.get(event.getTaskid()))) {
                        localBaselineEvents.add(event);
                    } else {
                        localExcluded.add(eventDecompositionOrder);
                    }
                } else if (event.getEventtype().equals("start") && notExcluded) {
                    localBaselineEvents.forEach(baseLineEvent -> {
                        baseLineEvent.setCaseid(event.getCaseid());
                    });
                } else if ((event.getEventtype().equals("complete") || event.getEventtype().equals("released")) && notExcluded) {
                    localBaselineEvents.forEach(baseLineEvent -> {
                        baseLineEvent.setCaseid(event.getCaseid());
                    });
                    baseline.replace(event.getTaskid(), null);
                    localBaselineEvents.clear();
                } else if (Arrays.asList(cancelEvents).contains(event.getEventtype()) && notExcluded) {
                    baseline.replace(event.getTaskid(), null);
                    localBaselineEvents.clear();
                }
            }

            // Fill timings, where one timing is identified by its taskid and caseId
            // and set initial start and end dates for cases
            for (Event event : caseInstance.getTaskEvents()) {
                String[] allowedEvents = {"offer", "unoffer", "allocate", "deallocate", "start", "autotask_start",
                        "complete", "released", "autotask_complete", "cancel", "cancelled_by_case", "timer_expired",
                        "suspended", "resumed"};
                if (!Arrays.asList(allowedEvents).contains(event.getEventtype())) {
                    continue;
                }
                // Initialize timing objects
                long eventTimestamp = Long.parseLong(event.getTimestamp());
                Map<String, TaskTimingDTO> timingMap = taskTimings.get(event.getTaskid());
                String eventIdentifier = event.getTaskid() + "__" + event.getCaseid();
                if (!timingMap.containsKey(eventIdentifier)) {
                    TaskTimingDTO newTiming = new TaskTimingDTO(event.getTaskid(), event.getCaseid().split("\\.")[0], event.getCaseid().replaceFirst("\\A\\w+[0-9][\\.]?", ""));
                    timingMap.put(eventIdentifier, newTiming);
                    caseStatisticDTO.getTaskTimingDTOS().add(newTiming);
                }
                TaskTimingDTO taskTiming = timingMap.get(eventIdentifier);
                // Relate participant to tasktiming

                Map<String, Set<String>> participantsMap = taskTiming.getParticipants();
                if (!event.getResourceid().equals("") && !participantsMap.containsKey(event.getResourceid())) {
                    participantsMap.put(event.getResourceid(), new HashSet<>());
                }
                Set<String> participantHadEvents = participantsMap.get(event.getResourceid());
                if (participantHadEvents == null) {
                    participantHadEvents = new HashSet<>();
                }
                // Handle events
                switch (event.getEventtype()) {
                    case "offer":
                    case "unoffer":
                        taskTiming.setOfferedTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Offered");
                        participantHadEvents.add("Offer");
                        setStartTimestamp(eventTimestamp, caseStatisticDTO);
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "allocate":
                        taskTiming.setAllocatedTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Allocated");
                        participantHadEvents.add("Allocate");
                        setStartTimestamp(eventTimestamp, caseStatisticDTO);
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "start":
                        taskTiming.setStartTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Started");
                        participantHadEvents.add("Start");
                        setStartTimestamp(eventTimestamp, caseStatisticDTO);
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "autotask_start":
                        taskTiming.setStartTimestamp(eventTimestamp);
                        taskTiming.setAutomated(true);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Running");
                        setStartTimestamp(eventTimestamp, caseStatisticDTO);
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "complete":
                        taskTiming.setEndTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Completed");
                        participantHadEvents.add("Complete");
                    case "released":
                        taskTiming.setEndTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Completed");
                        participantHadEvents.add("Released");
                        break;
                    case "autotask_complete":
                        taskTiming.setEndTimestamp(eventTimestamp);
                        taskTiming.setAutomated(true);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Completed");
                        break;
                    case "cancel":
                    case "cancelled_by_case":
                        taskTiming.setCancelled(true);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Cancelled");
                        participantHadEvents.add("Cancel");
                        break;
                    case "timer_expired":
                        taskTiming.setCancelled(true);
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Expired");
                        participantHadEvents.add("Expired");
                        break;
                    case "suspended":
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Suspended");
                        participantHadEvents.add("Suspended");
                        break;
                    case "resumed":
                        setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Resumed");
                        participantHadEvents.add("Resumed");
                        break;
                }
            }

            // Case event handling
            for (Event event : caseInstance.getCaseEvents()) {
                long eventTimestamp = Long.parseLong(event.getTimestamp());
                if (!eventRelatedParticipants.containsKey(event.getEventtype())) {
                    eventRelatedParticipants.put(event.getEventtype(), new HashSet<>());
                }
                eventRelatedParticipants.get(event.getEventtype()).add(participantsInformationMap.get(event.getResourceid()));
                switch (event.getEventtype()) {
                    case "CaseCancel":
                        caseStatisticDTO.setEnd(eventTimestamp);
                        caseStatisticDTO.setCancelled(true);
                        for (Task task : allExistingTasks) {
                            Collection<TaskTimingDTO> allTaskTimings = taskTimings.get(task.getId()).values();
                            for (TaskTimingDTO taskTiming : allTaskTimings) {
                                if (taskTiming.getCaseid().equals(caseInstance.getId())
                                        && !(taskTiming.getStatus().equals("Completed")
                                        || taskTiming.getStatus().equals("Cancelled"))) {
                                    taskTiming.setCancelled(true);
                                    setLatestEventTimestampAndStatus(eventTimestamp, taskTiming, "Cancelled");
                                }
                            }
                        }

                        break;
                    case "CaseStart":
                        caseStatisticDTO.setStart(eventTimestamp);
                        break;
                    case "CaseComplete":
                        caseStatisticDTO.setEnd(eventTimestamp);
                        break;
                }
            }
        }
    }

    private static void setLatestEventTimestampAndStatus(long eventTimestamp, TaskTimingDTO taskTiming, String status) {
        if (eventTimestamp > taskTiming.getLatestEventTimestamp()) {
            taskTiming.setLatestEventTimestamp(eventTimestamp);
            taskTiming.setStatus(status);
        }
    }

    private static void setStartTimestamp(long eventTimestamp, CaseStatisticDTO caseStatistic) {
        if (caseStatistic.getStart() == 0) {
            caseStatistic.setStart(eventTimestamp);
        }
    }

    private static void updateSmallestDecompositionOrder(Event event, String eventDecompositionOrder, Map<String, String> smallestDecompositionOrders) {
        // If a start or complete Event (or others) appears, check whether
        // it has a smaller decompositionOrder then currently known for the task
        if (!smallestDecompositionOrders.containsKey(event.getTaskid())) {
            smallestDecompositionOrders.put(event.getTaskid(), "");
        }
        String[] ignoredEvents = {"offer", "unoffer", "allocate", "cancelled_by_case", "cancel", "suspend", "resume", "timer_expired"};
        if (!Arrays.asList(ignoredEvents).contains(event.getEventtype())) {
            if (StatisticControllerHelper.decompositionOrderIsSmaller(smallestDecompositionOrders.get(event.getTaskid()), eventDecompositionOrder)) {
                smallestDecompositionOrders.replace(event.getTaskid(), eventDecompositionOrder);
            }
        }
    }

}
