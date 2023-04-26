/*
 * Copyright (c) 2004-2012 The YAWL Foundation. All rights reserved.
 * The YAWL Foundation is a collaboration of individuals and
 * organisations who are committed to improving workflow technology.
 *
 * This file is part of YAWL. YAWL is free software: you can
 * redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation.
 *
 * YAWL is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
 * Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with YAWL. If not, see <http://www.gnu.org/licenses/>.
 */
package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionSpecificationDao;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionTaskDao;
import org.yawlfoundation.yawldashboardbackend.dto.*;
import org.yawlfoundation.yawldashboardbackend.model.*;
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

/**
 * @author Robin Steinwarz
 */

@RestController
@Secured("ROLE_ADMIN")
class SpecificationController {

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


    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public void testRoute() {
        YSpecificationID specId = new YSpecificationID("UID_abd5e00c-fb54-4ee9-b31a-197f2d65f685", "0.6", "Test_Prozess");
        //resourceLogManager.getSpecificationEvents(new YSpecificationID("UID_e63327e0-099f-4eae-b622-5fc30c467f46", "0.79", "ReiseangebotEntwicklung"));
        List<Event> events = resourceLogManager.getSpecificationEvents(specId);
        //workItemManager.getSpecificationList();
        String things = interfaceEManager.getSpecificationXESLog(specId);
        String things2 = interfaceEManager.getCompleteCaseLogsForSpecification(specId);
        String things3 = wsManager.getRunningWorklets();
        String things4 = wsManager.getOrphanedWorklets();
        //workItemManager.getSpecificationDefinitionById(specId);
        System.out.println("Test completed.");
    }

    @RequestMapping(value = "/api/specification/{uri}/{specificationID}/{specversion}/statistic", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public SpecificationStatisticDTO getSpecificationStatistic(@PathVariable("specificationID") String specificationID,
                                                               @PathVariable("specversion") String specversion,
                                                               @PathVariable("uri") String uri) {
        YSpecificationID specId = new YSpecificationID(specificationID, specversion, uri);
        AtomicReference<String> currentSpeckey = new AtomicReference<>("");
        List<Event> events = resourceLogManager.getAllResourceEvents(specId);

        Map<String, Participant> participantsMap = new HashMap<>();
        for (Participant participant : resourceManager.getParticipants()) {
            participantsMap.put(participant.getId(), participant);
        }
        Set<String> participantIDsRelatedToCase = new HashSet<>();

        Set<String> speckeys = new HashSet<>();
        events.forEach(event -> {
            if (currentSpeckey.get().equals("") && !speckeys.contains(event.getSpeckey())) {
                speckeys.add(event.getSpeckey());
                YSpecificationID ySpecificationID = resourceLogManager.getSpecificationIdentifiers(event.getSpeckey());
                if (ySpecificationID.equals(specId)) {
                    currentSpeckey.set(event.getSpeckey());
                }
            }
        });


        // Map all resource events to cases of the specification
        List<CaseDTO> caseDTOS = new ArrayList<>();
        events.stream().filter(event -> event.getSpeckey().equals(currentSpeckey.get())).forEach(event -> {

            String pureCaseId = event.getCaseid().split("\\.")[0];
            // Ensure case object exists
            if (caseDTOS.stream().noneMatch(caseDTOInstance -> caseDTOInstance.getId().equals(event.getCaseid().split("\\.")[0]))) {
                CaseDTO newCaseDTO = new CaseDTO(pureCaseId);
                caseDTOS.add(newCaseDTO);
            }

            // Find relevant case
            CaseDTO associatedCaseDTO = caseDTOS.stream()
                    .filter(caseDTOInstance -> caseDTOInstance.getId().equals(pureCaseId))
                    .findFirst()
                    .get();

            // Add event to case object
            if (event.getTaskid().equals("")) {
                associatedCaseDTO.getCaseEvents().add(event);
            } else {
                associatedCaseDTO.getTaskEvents().add(event);
            }
        });

        // Fix the task order
        Map<String, String> smallestDecompositionOrders = new HashMap<>();
        Map<String, CaseStatisticDTO> caseStatisticMap = new HashMap<>();
        Map<String, Map<String, TaskTimingDTO>> taskTimings = new HashMap<>();
        for (CaseDTO caseDTOInstance : caseDTOS) {
            // Initiate case statistic per case and get it
            caseStatisticMap.put(caseDTOInstance.getId(), new CaseStatisticDTO(caseDTOInstance.getId()));
            CaseStatisticDTO caseStatisticDTO = caseStatisticMap.get(caseDTOInstance.getId());

            // Repair case data for first offer/allocation/cancelled_by_case events
            Map<String,String> baseline = new HashMap<>();
            Map<String,List<Event>> baselineEvents = new HashMap<>();
            Map<String,Set<String>> excluded = new HashMap<>();
            for (Event event : caseDTOInstance.getTaskEvents()) {
                String eventDecompositionOrder = event.getCaseid().replaceFirst("\\A\\w+[0-9][\\.]?", "");
                if(!smallestDecompositionOrders.containsKey(event.getTaskid())){
                    smallestDecompositionOrders.put(event.getTaskid(), "");
                }
                if(!event.getEventtype().equals("offer")
                        && !event.getEventtype().equals("unoffer")
                        && !event.getEventtype().equals("allocate")
                        && !event.getEventtype().equals("cancelled_by_case")
                        && !event.getEventtype().equals("cancel")
                        && !event.getEventtype().equals("suspend")
                        && !event.getEventtype().equals("resume")
                        && !event.getEventtype().equals("timer_expired")){
                    if(decompositionOrderIsSmaller(smallestDecompositionOrders.get(event.getTaskid()), eventDecompositionOrder)){
                        smallestDecompositionOrders.replace(event.getTaskid(),eventDecompositionOrder);
                    }
                }

                if(!baseline.containsKey(event.getTaskid())){
                    baseline.put(event.getTaskid(), null);
                    baselineEvents.put(event.getTaskid(), new ArrayList<>());
                    excluded.put(event.getTaskid(), new HashSet<>());
                }

                List<Event> localBaselineEvents = baselineEvents.get(event.getTaskid());
                Set<String> localExcluded = excluded.get(event.getTaskid());
                switch (event.getEventtype()) {
                    case "offer":
                    case "unoffer":
                    case "allocate":
                        if(baseline.get(event.getTaskid()) == null && !localExcluded.contains(eventDecompositionOrder)){
                            baseline.replace(event.getTaskid(), eventDecompositionOrder);
                            localBaselineEvents.add(event);
                            break;
                        }
                        if(eventDecompositionOrder.equals(baseline.get(event.getTaskid()))){
                            localBaselineEvents.add(event);
                        }else{
                            localExcluded.add(eventDecompositionOrder);
                        }
                        break;
                    case "start":
                        if(!localExcluded.contains(eventDecompositionOrder)){
                            localBaselineEvents.forEach(baseLineEvent -> {
                                baseLineEvent.setCaseid(event.getCaseid());
                            });
                        }
                        break;
                    case "complete":
                        if(!localExcluded.contains(eventDecompositionOrder)){
                            localBaselineEvents.forEach(baseLineEvent -> {
                                baseLineEvent.setCaseid(event.getCaseid());
                            });
                            baseline.replace(event.getTaskid(), null);
                            localBaselineEvents.clear();
                        }
                        break;
                    case "autotask_start":
                    case "autotask_complete":
                        break;
                    case "cancelled_by_case":
                    case "cancel":
                        if(!localExcluded.contains(eventDecompositionOrder)){
                            baseline.replace(event.getTaskid(), null);
                            localBaselineEvents.clear();
                        }
                        break;
                }
            }

            // Fill timings, where one timing is identified by its taskid and caseId
            // and set initial start and end dates for cases
            for (Event event : caseDTOInstance.getTaskEvents()) {
                String decompositionOrder = event.getCaseid().replaceFirst("\\A\\w+[0-9][\\.]?", "");
                long eventTimestamp = Long.parseLong(event.getTimestamp());
                participantIDsRelatedToCase.add(event.getResourceid());
                if (!taskTimings.containsKey(event.getTaskid())) {
                    taskTimings.put(event.getTaskid(), new HashMap<>());
                }
                Map<String, TaskTimingDTO> timingMap = taskTimings.get(event.getTaskid());

                String eventIdentifier = event.getTaskid() + "__" + event.getCaseid();
                if (!timingMap.containsKey(eventIdentifier)) {
                    TaskTimingDTO newTiming = new TaskTimingDTO(event.getTaskid(), event.getCaseid().split("\\.")[0], decompositionOrder);
                    timingMap.put(eventIdentifier, newTiming);
                    caseStatisticDTO.getTaskTimingDTOS().add(newTiming);
                }

                TaskTimingDTO taskTimingDTO = timingMap.get(eventIdentifier);

                if (!event.getResourceid().equals("") && !event.getEventtype().equals("offer") && !event.getEventtype().equals("unoffer") && !event.getResourceid().equals("system") && taskTimingDTO.getParticipants()
                        .stream().noneMatch(participant -> participant.getId().equals(event.getResourceid()))) {
                    taskTimingDTO.getParticipants().add(participantsMap.get(event.getResourceid()));
                }
                switch (event.getEventtype()) {
                    case "offer":
                    case "unoffer":
                        taskTimingDTO.setOfferedTimestamp(eventTimestamp);
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Offered");
                        }
                        if (caseStatisticDTO.getStart() == 0) {
                            caseStatisticDTO.setStart(eventTimestamp);
                        }
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "allocate":
                        taskTimingDTO.setAllocatedTimestamp(eventTimestamp);
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Allocated");
                        }
                        if (caseStatisticDTO.getStart() == 0) {
                            caseStatisticDTO.setStart(eventTimestamp);
                        }
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "start":
                        taskTimingDTO.setStartTimestamp(eventTimestamp);
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Started");
                        }
                        if (caseStatisticDTO.getStart() == 0) {
                            caseStatisticDTO.setStart(eventTimestamp);
                        }
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "autotask_start":
                        taskTimingDTO.setStartTimestamp(eventTimestamp);
                        taskTimingDTO.setAutomated(true);
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Running");
                        }
                        if (caseStatisticDTO.getStart() == 0) {
                            caseStatisticDTO.setStart(eventTimestamp);
                        }
                        caseStatisticDTO.setEnd(0);
                        break;
                    case "complete":
                        taskTimingDTO.setEndTimestamp(eventTimestamp);
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Completed");
                        }
                        caseStatisticDTO.setEnd(eventTimestamp);
                        break;
                    case "autotask_complete":
                        taskTimingDTO.setEndTimestamp(eventTimestamp);
                        taskTimingDTO.setAutomated(true);
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Completed");
                        }
                        caseStatisticDTO.setEnd(eventTimestamp);
                        break;
                    case "cancel":
                    case "cancelled_by_case":
                        taskTimingDTO.setCancelled(true);
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Cancelled");
                        }
                        caseStatisticDTO.setEnd(eventTimestamp);
                        break;
                    case "timer_expired":
                        taskTimingDTO.setCancelled(true);
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Expired");
                        }
                        caseStatisticDTO.setEnd(eventTimestamp);
                        break;
                    case "suspended":
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Suspended");
                        }
                        break;
                    case "resumed":
                        if (eventTimestamp > taskTimingDTO.getLatestEventTimestamp()) {
                            taskTimingDTO.setLatestEventTimestamp(eventTimestamp);
                            taskTimingDTO.setStatus("Resumed");
                        }
                        break;
                }
            }
        }

        // Set specification statistic
        long avgCaseCompletionTime = 0L;
        List<Long> caseStartTimestamps = new ArrayList<>();
        int successful = 0;
        int unsuccessful = 0;
        int casesImpactingCompletionTimeCount = 0;
        for (CaseDTO caseDTOInstance : caseDTOS) {
            CaseStatisticDTO caseStatisticDTO = caseStatisticMap.get(caseDTOInstance.getId());
            boolean cancelled = false;
            for (Event event : caseDTOInstance.getCaseEvents()) {
                participantIDsRelatedToCase.add(event.getResourceid());
                switch (event.getEventtype()) {
                    case "cancel_case":
                        cancelled = true;
                        caseStatisticDTO.setEnd(Long.parseLong(event.getTimestamp()));
                        caseStatisticDTO.setCancelled(true);
                        break;
                    case "launch_case":
                        caseStatisticDTO.setStart(Long.parseLong(event.getTimestamp()));
                        break;
                    case "complete_case":
                        caseStatisticDTO.setEnd(Long.parseLong(event.getTimestamp()));
                        break;
                }
            }
            if (caseStatisticDTO.getStart() == 0) {
                continue;
            }
            caseStartTimestamps.add(caseStatisticDTO.getStart());
            if (cancelled) {
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
        Integer[] caseOccurrencesPerDayOfWeek = occurrencesInWeeks(caseStartTimestamps);

        List<TaskStatisticDTO> taskStatisticDTOS = new ArrayList<>();
        List<String> availableTasks = new ArrayList<String>(taskTimings.keySet());
        final long now = new Date().getTime();
        for (String taskid : availableTasks) {
            TaskStatisticDTO taskStatisticDTO = new TaskStatisticDTO(taskid);
            List<Long> creationTimestamps = new ArrayList<>();
            AtomicLong avgQueueTime = new AtomicLong();
            AtomicLong avgQueueTimeCounter = new AtomicLong();
            AtomicLong avgCompletionTime = new AtomicLong();
            AtomicLong avgCompletionTimeCounter = new AtomicLong();

            taskTimings.get(taskid).values().stream()
                    .filter(taskTimingDTO -> !taskTimingDTO.isCancelled())
                    .forEach(taskTimingDTO -> {
                        CaseStatisticDTO relatedCaseDTO = caseStatisticMap.get(taskTimingDTO.getCaseid());
                        long creationTimestamp = 0;
                        long queueTime = 0;
                        long completionTime = 0;

                        taskStatisticDTO.getParticipants().addAll(taskTimingDTO.getParticipants());

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
                taskStatisticDTO.setAvgQueueTime(avgQueueTime.get() / avgQueueTimeCounter.get());
            }
            if (avgCompletionTimeCounter.get() != 0) {
                // Avg. completion time of task
                taskStatisticDTO.setAvgCompletionTime(avgCompletionTime.get() / avgCompletionTimeCounter.get());
            }
            // Avg. occurences/week
            taskStatisticDTO.setAvgOccurrencesPerWeek(occurrencesInWeeks(creationTimestamps));
            //
            taskStatisticDTOS.add(taskStatisticDTO);
        }

        long avgResourceTimePerWeekSummed = 0;
        for (TaskStatisticDTO taskStatisticDTO : taskStatisticDTOS) {
            // Save decompositionOrder
            taskStatisticDTO.setDecompositionOrder(smallestDecompositionOrders.get(taskStatisticDTO.getTaskid()));

            // Avg. Capacity needed
            avgResourceTimePerWeekSummed += taskStatisticDTO.getAvgCompletionTime() * taskStatisticDTO.getAvgOccurrencesPerWeek()[7];
        }

        // Avg. Time to reach of task
        taskStatisticDTOS = taskStatisticDTOS.stream().sorted().collect(Collectors.toList());
        String currentDecomposition = "";
        long additiveAvgTimeToReach = 0;
        long additiveAvgTimeToReachStep = 0;
        int additiveAvgTimeToReachStepCounter = 0;
        for (TaskStatisticDTO taskStatisticDTO : taskStatisticDTOS) {
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

        // Fill tasks without statistics
        List<Task> allExistingTasks = workItemManager.getSpecificationDefinitionById(specId);
        for(Task existingTask: allExistingTasks) {
            boolean exists = false;
            for(TaskStatisticDTO taskDTO: taskStatisticDTOS){
                if(taskDTO.getTaskid().equals(existingTask.getId())){
                    exists = true;
                    break;
                }
            }
            if(!exists){
                taskStatisticDTOS.add(new TaskStatisticDTO(existingTask.getId()));
            }
        }

        SpecificationStatisticDTO specificationStatisticDTO = new SpecificationStatisticDTO(specificationID, specversion, uri);
        specificationStatisticDTO.setSpeckey(currentSpeckey.get());
        specificationStatisticDTO.setAvgCaseCompletionTime(avgCaseCompletionTime);
        specificationStatisticDTO.setSuccessfulCases(successful);
        specificationStatisticDTO.setUnsuccessfulCases(unsuccessful);
        specificationStatisticDTO.setCaseOccurrencesPerDayOfWeek(caseOccurrencesPerDayOfWeek);
        specificationStatisticDTO.setAvgResourceTimePerWeekSummed(avgResourceTimePerWeekSummed);
        specificationStatisticDTO.setCaseStatisticDTOS(new ArrayList<>(caseStatisticMap.values()));
        specificationStatisticDTO.setTaskStatisticDTOS(taskStatisticDTOS);
        specificationStatisticDTO.getParticipants().addAll(
                participantIDsRelatedToCase.stream()
                        .map(participantsMap::get).filter(Objects::nonNull)
                        .collect(Collectors.toList())
        );

        return specificationStatisticDTO;
    }

    @RequestMapping(value = "/api/specification", method = RequestMethod.GET)
    public SpecificationListResource getSpecifications() {
        return new SpecificationListResource(workItemManager.getAllLoadedSpecifications());
    }

    @RequestMapping(value = "/api/specification/{uri}/{specificationID}/{specversion}", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public Specification getSpecification(@PathVariable("specificationID") String specificationID,
                                          @PathVariable("specversion") String specversion,
                                          @PathVariable("uri") String uri) {
        return workItemManager.getSpecificationById(new YSpecificationID(specificationID, specversion, uri));
    }

    @RequestMapping(value = "/api/specification/{uri}/{specificationID}/{specversion}/definition",
            method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public List<Task> getTaskDefinitions(@PathVariable("specificationID") String specificationID,
                                         @PathVariable("specversion") String specversion,
                                         @PathVariable("uri") String uri) {
        return workItemManager.getSpecificationDefinitionById(new YSpecificationID(specificationID, specversion, uri));
    }


    @RequestMapping(value = "/api/specification/extension", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public List<ExtensionSpecification> getExtensionAttributes() {
        return extensionSpecificationDao.findAll();
    }

    @RequestMapping(value = "/api/specification/extension/{uri}/{specificationID}/{specversion}", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public ExtensionSpecification getExtensionAttributesForSpecifications(
            @PathVariable("specificationID") String specificationID,
            @PathVariable("specversion") String specversion,
            @PathVariable("uri") String uri
    ) {
        ExtensionSpecification extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);

        if (extensionSpecification == null) {
            createLocalEntities(specificationID, specversion, uri);
            extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);
        }
        return extensionSpecification;
    }

    @RequestMapping(value = "/api/specification/task/{uri}/{specificationID}/{specversion}", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public List<ExtensionTask> getExtensionTaskAttributes(
            @PathVariable("specificationID") String specificationID,
            @PathVariable("specversion") String specversion,
            @PathVariable("uri") String uri
    ) {
        ExtensionSpecification extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);

        if (extensionSpecification == null) {
            createLocalEntities(specificationID, specversion, uri);
        }
        return extensionTaskDao.findAllByComposedID(specificationID, specversion, uri);
    }

    @RequestMapping(value = "/api/specification/extension/{uri}/{specificationID}/{specversion}/core",
            params = "core", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeSpecificationCore(@PathVariable("specificationID") String specificationID,
                                       @PathVariable("specversion") String specversion,
                                       @PathVariable("uri") String uri,
                                       @RequestParam("core") Boolean core) {
        extensionSpecificationDao.setCore(specificationID, specversion, uri, core);
    }

    @RequestMapping(value = "/api/specification/extension/{uri}/{specificationID}/{specversion}/specificationTimeLimit",
            params = "specificationTimeLimit", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeSpecificationTimeLimit(@PathVariable("specificationID") String specificationID,
                                            @PathVariable("specversion") String specversion,
                                            @PathVariable("uri") String uri,
                                            @RequestParam("specificationTimeLimit") Integer specificationTimeLimit) {
        extensionSpecificationDao.setSpecificationTimeLimit(specificationID, specversion, uri, specificationTimeLimit);
    }

    @RequestMapping(value = "/api/specification/extension/{uri}/{specificationID}/{specversion}/{taskid}/costResourceHour",
            params = "costResourceHour", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeCostResourceHour(@PathVariable("specificationID") String specificationID,
                                      @PathVariable("specversion") String specversion,
                                      @PathVariable("uri") String uri,
                                      @PathVariable("taskid") String taskid,
                                      @RequestParam("costResourceHour") Integer costResourceHour) {
        extensionTaskDao.setCostResourceHour(specificationID, specversion, uri, taskid, costResourceHour);
    }

    @RequestMapping(value = "/api/specification/task/{uri}/{specificationID}/{specversion}/{taskid}/maxTaskAge",
            params = "maxTaskAge", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeMaxTaskAge(@PathVariable("specificationID") String specificationID,
                                @PathVariable("specversion") String specversion,
                                @PathVariable("uri") String uri,
                                @PathVariable("taskid") String taskid,
                                @RequestParam("maxTaskAge") Integer maxTaskAge) {
        extensionTaskDao.setMaxTaskAge(specificationID, specversion, uri, taskid, maxTaskAge);
    }

    @RequestMapping(value = "/api/specification/task/{uri}/{specificationID}/{specversion}/{taskid}/maxQueueAge",
            params = "maxQueueAge", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeMaxQueueAge(@PathVariable("specificationID") String specificationID,
                                 @PathVariable("specversion") String specversion,
                                 @PathVariable("uri") String uri,
                                 @PathVariable("taskid") String taskid,
                                 @RequestParam("maxQueueAge") Integer maxQueueAge) {
        extensionTaskDao.setMaxQueueAge(specificationID, specversion, uri, taskid, maxQueueAge);
    }

    @RequestMapping(value = "/api/specification/task/{uri}/{specificationID}/{specversion}/{taskid}/setAttributes",
            params = "maxQueueAge", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeMaxQueueAge(@PathVariable("specificationID") String specificationID,
                                 @PathVariable("specversion") String specversion,
                                 @PathVariable("uri") String uri,
                                 @PathVariable("taskid") String taskid,
                                 @RequestParam("costResourceHour") Integer costResourceHour,
                                 @RequestParam("maxTaskAge") Integer maxTaskAge,
                                 @RequestParam("maxQueueAge") Integer maxQueueAge) {
        extensionTaskDao.setAttributes(specificationID, specversion, uri, taskid, costResourceHour, maxTaskAge, maxQueueAge);
    }

    private void createLocalEntities(String specificationID, String specversion, String uri) {
        List<Task> tasks = workItemManager.getSpecificationDefinitionById(new YSpecificationID(specificationID, specversion, uri));

        ExtensionSpecification newExtensionSpecification = new ExtensionSpecification();
        newExtensionSpecification.setSpecificationId(specificationID);
        newExtensionSpecification.setSpecversion(specversion);
        newExtensionSpecification.setUri(uri);
        newExtensionSpecification.setCore(false);
        newExtensionSpecification.setSpecificationTimeLimit(0);
        extensionSpecificationDao.save(newExtensionSpecification);

        List<ExtensionTask> extensionTasks = new ArrayList<>();

        tasks.forEach(task -> {
            ExtensionTask extensionTask = new ExtensionTask();
            extensionTask.setTaskid(task.getId());
            extensionTask.setSpecificationId(specificationID);
            extensionTask.setSpecversion(specversion);
            extensionTask.setUri(uri);
            extensionTask.setCostResourceHour(0);
            extensionTask.setMaxTaskAge(0);
            extensionTask.setMaxQueueAge(0);
            extensionTaskDao.save(extensionTask);
            extensionTasks.add(extensionTask);
        });
    }

    private boolean decompositionOrderIsSmaller(String order, String order2) {
        if (order2.equals("")) {
            return false;
        }
        if (order.equals("")) {
            return true;
        }
        String[] orderElements = order.split("\\.");
        String[] order2Elements = order2.split("\\.");

        // select smallest array
        int limiter = orderElements.length;
        if (limiter > order2Elements.length) {
            limiter = order2Elements.length;
        }

        // compare progress on individual levels
        for (int i = 0; i < limiter; i++) {
            if (Integer.parseInt(orderElements[i]) > Integer.parseInt(order2Elements[i])) {
                return true;
            }
        }

        return false;
    }

    private boolean isHighestDecompositionOrder(Map<String, String> smallestCaseDecompositionOrder, String order) {
        List<String> orderedDecompositionOrderList = smallestCaseDecompositionOrder.values().stream().sorted(
                TaskStatisticDTO::decompositionOrderComparison).collect(Collectors.toList());
        if (decompositionOrderIsSmaller(orderedDecompositionOrderList.get(orderedDecompositionOrderList.size() - 1), order)) {
            return false;
        }
        return true;
    }

    private boolean isSmallestDecompositionOrder(Map<String, String> smallestCaseDecompositionOrder, String order) {
        List<String> orderedDecompositionOrderList = smallestCaseDecompositionOrder.values().stream().sorted(
                TaskStatisticDTO::decompositionOrderComparison).collect(Collectors.toList());
        if (decompositionOrderIsSmaller(order, orderedDecompositionOrderList.get(0))) {
            return false;
        }
        return true;
    }

    private Integer[] occurrencesInWeeks(List<Long> timestamps) {
        Integer[] occurrencesPerDayOfWeek = new Integer[]{0, 0, 0, 0, 0, 0, 0, 0};
        List<Set<String>> weeksWithOccurrences = List.of(new HashSet<String>(), new HashSet<String>(), new HashSet<String>(),
                new HashSet<String>(), new HashSet<String>(), new HashSet<String>(), new HashSet<String>());
        Calendar calendar = Calendar.getInstance();
        for (long start : timestamps) {
            calendar.setTimeInMillis(start);
            int year = calendar.get(Calendar.YEAR);
            int week = calendar.get(Calendar.WEEK_OF_YEAR);
            int weekDay = calendar.get(Calendar.DAY_OF_WEEK) - 2;
            // Mapping start of week at sunday to start of week at monday
            if (weekDay == -1) {
                weekDay = 6;
            }
            occurrencesPerDayOfWeek[weekDay]++;
            weeksWithOccurrences.get(weekDay).add(year + "_" + week);
        }

        for (int i = 0; i < 7; i++) {
            int weeksOccurring = weeksWithOccurrences.get(i).size();
            if (weeksOccurring == 0) {
                occurrencesPerDayOfWeek[i] = 0;
                continue;
            }
            int avgOccurrencePerWeekday = (int) Math.ceil((double) occurrencesPerDayOfWeek[i] / weeksOccurring);
            occurrencesPerDayOfWeek[i] = avgOccurrencePerWeekday;
            occurrencesPerDayOfWeek[7] += avgOccurrencePerWeekday;
        }

        return occurrencesPerDayOfWeek;
    }
}
