package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.yawlfoundation.yawldashboardbackend.dto.CaseDTO;
import org.yawlfoundation.yawldashboardbackend.dto.CaseStatisticDTO;
import org.yawlfoundation.yawldashboardbackend.dto.WorkitemDTO;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Resource;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Task;

import java.util.*;

/**
 * @author Robin Steinwarz
 */
public class ProcessLogRepairService {

    protected static void fixTaskOrder(List<CaseDTO> cases, Map<String, String> smallestOrders,
                                       List<Task> allExistingTasks,
                                       Map<String, CaseStatisticDTO> caseStatisticMap,
                                       Map<String, Map<String, WorkitemDTO>> workitems,
                                       Map<String, Set<Resource>> eventRelatedResources,
                                       Map<String, Resource> resourcesInformationMap) {
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
                String eventOrder = event.getCaseid().replaceFirst("\\A\\w+[0-9][\\.]?", "");
                updateSmallestOrder(event, eventOrder, smallestOrders);
                if (!eventRelatedResources.containsKey(event.getEventtype())) {
                    eventRelatedResources.put(event.getEventtype(), new HashSet<>());
                }
                eventRelatedResources.get(event.getEventtype()).add(resourcesInformationMap.get(event.getResourceid()));
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
                boolean notExcluded = !localExcluded.contains(eventOrder);
                if (Arrays.asList(resourceEvents).contains(event.getEventtype())) {
                    if (baseline.get(event.getTaskid()) == null && notExcluded) {
                        baseline.replace(event.getTaskid(), eventOrder);
                        localBaselineEvents.add(event);
                    }
                    if (eventOrder.equals(baseline.get(event.getTaskid()))) {
                        localBaselineEvents.add(event);
                    } else {
                        localExcluded.add(eventOrder);
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

            // The position number of some events cannot be repaired, because no start or complete Event exists, yet.
            // This case can not be completely solved with current information
            for (List<Event> eventsWithoutStartOrComplete : baselineEvents.values()) {
                for (Event event : eventsWithoutStartOrComplete) {
                    String eventOrder = event.getCaseid().replaceFirst("\\A\\w+[0-9][\\.]?", "");
                    String minTaskOrder = smallestOrders.get(event.getTaskid());
                    if (PMIControllerUtil.orderIsSmaller(eventOrder, minTaskOrder)) {
                        event.setCaseid(event.getCaseid().split("\\.")[0] + "." + minTaskOrder);
                    }
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
                Map<String, WorkitemDTO> timingMap = workitems.get(event.getTaskid());
                String eventIdentifier = event.getTaskid() + "__" + event.getCaseid();
                if (!timingMap.containsKey(eventIdentifier)) {
                    WorkitemDTO newTiming = new WorkitemDTO(event.getTaskid(), event.getCaseid().split("\\.")[0], event.getCaseid().replaceFirst("\\A\\w+[0-9][\\.]?", ""));
                    timingMap.put(eventIdentifier, newTiming);
                    caseStatisticDTO.getWorkitemDTOS().add(newTiming);
                }
                WorkitemDTO workitem = timingMap.get(eventIdentifier);
                // Relate resources to workitem

                Map<String, Set<String>> resourcesMap = workitem.getResources();
                if (!event.getResourceid().equals("") && !resourcesMap.containsKey(event.getResourceid())) {
                    resourcesMap.put(event.getResourceid(), new HashSet<>());
                }
                Set<String> resourcesHadEvents = resourcesMap.get(event.getResourceid());
                if (resourcesHadEvents == null) {
                    resourcesHadEvents = new HashSet<>();
                }
                // Handle events
                switch (event.getEventtype()) {
                    case "offer":
                    case "unoffer":
                        workitem.setOfferedTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Offered");
                        resourcesHadEvents.add("Offer");
                        setStartTimestamp(eventTimestamp, caseStatisticDTO);
                        break;
                    case "allocate":
                        workitem.setAllocatedTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Allocated");
                        resourcesHadEvents.add("Allocate");
                        setStartTimestamp(eventTimestamp, caseStatisticDTO);
                        break;
                    case "start":
                        workitem.setStartTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Started");
                        resourcesHadEvents.add("Start");
                        setStartTimestamp(eventTimestamp, caseStatisticDTO);
                        break;
                    case "autotask_start":
                        workitem.setStartTimestamp(eventTimestamp);
                        workitem.setAutomated(true);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Running");
                        setStartTimestamp(eventTimestamp, caseStatisticDTO);
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "complete":
                        workitem.setEndTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Completed");
                        resourcesHadEvents.add("Complete");
                    case "released":
                        workitem.setEndTimestamp(eventTimestamp);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Completed");
                        resourcesHadEvents.add("Released");
                        break;
                    case "autotask_complete":
                        workitem.setEndTimestamp(eventTimestamp);
                        workitem.setAutomated(true);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Completed");
                        break;
                    case "cancel":
                    case "cancelled_by_case":
                        workitem.setCancelled(true);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Cancelled");
                        resourcesHadEvents.add("Cancel");
                        break;
                    case "timer_expired":
                        workitem.setCancelled(true);
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Expired");
                        resourcesHadEvents.add("Expired");
                        break;
                    case "suspended":
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Suspended");
                        resourcesHadEvents.add("Suspended");
                        break;
                    case "resumed":
                        setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Resumed");
                        resourcesHadEvents.add("Resumed");
                        break;
                }
            }

            // Case event handling
            for (Event event : caseInstance.getCaseEvents()) {
                long eventTimestamp = Long.parseLong(event.getTimestamp());
                if (!eventRelatedResources.containsKey(event.getEventtype())) {
                    eventRelatedResources.put(event.getEventtype(), new HashSet<>());
                }
                eventRelatedResources.get(event.getEventtype()).add(resourcesInformationMap.get(event.getResourceid()));
                switch (event.getEventtype()) {
                    case "CaseCancel":
                        caseStatisticDTO.setEnd(eventTimestamp);
                        caseStatisticDTO.setCancelled(true);
                        for (Task task : allExistingTasks) {
                            Collection<WorkitemDTO> allWorkitems = workitems.get(task.getId()).values();
                            for (WorkitemDTO workitem : allWorkitems) {
                                if (workitem.getCaseid().equals(caseInstance.getId())
                                        && !(workitem.getStatus().equals("Completed")
                                        || workitem.getStatus().equals("Cancelled"))) {
                                    workitem.setCancelled(true);
                                    setLatestEventTimestampAndStatus(eventTimestamp, workitem, "Cancelled");
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

    private static void setLatestEventTimestampAndStatus(long eventTimestamp, WorkitemDTO workitem, String status) {
        if (eventTimestamp > workitem.getLatestEventTimestamp()) {
            workitem.setLatestEventTimestamp(eventTimestamp);
            workitem.setStatus(status);
        }
    }

    private static void setStartTimestamp(long eventTimestamp, CaseStatisticDTO caseStatistic) {
        if (caseStatistic.getStart() == 0) {
            caseStatistic.setStart(eventTimestamp);
        }
    }

    private static void updateSmallestOrder(Event event, String eventOrder, Map<String, String> smallestOrders) {
        // If a start or complete Event (or others) appears, check whether
        // it has a smaller order then currently known for the task
        if (!smallestOrders.containsKey(event.getTaskid())) {
            smallestOrders.put(event.getTaskid(), "");
        }
        String[] ignoredEvents = {"offer", "unoffer", "allocate", "cancelled_by_case", "cancel", "suspend", "resume", "timer_expired"};
        if (!Arrays.asList(ignoredEvents).contains(event.getEventtype())) {
            if (PMIControllerUtil.orderIsSmaller(smallestOrders.get(event.getTaskid()), eventOrder)) {
                smallestOrders.replace(event.getTaskid(), eventOrder);
            }
        }
    }

}
