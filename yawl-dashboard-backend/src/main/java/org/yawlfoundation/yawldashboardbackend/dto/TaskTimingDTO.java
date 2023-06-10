package org.yawlfoundation.yawldashboardbackend.dto;

import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Participant;

import java.util.*;
/**
 * @author Robin Steinwarz
 */
public class TaskTimingDTO {
    private String taskid;
    private String name;
    private String caseid;
    private String decompositionOrder;
    // <Participant_ID, Set<Event>>

    private Map<String, Set<String>> participants = new HashMap<>();
    private boolean automated = false;
    private boolean cancelled = false;
    private String status;
    private long latestEventTimestamp = 0L;
    private long offeredTimestamp = 0L;
    private long allocatedTimestamp = 0L;
    private long startTimestamp = 0L;
    private long endTimestamp = 0L;
    private long resourceTime = 0L;
    private long age = 0L;
    private long completionTime = 0L;
    private long queueTime = 0L;
    private long created = 0L;

    public TaskTimingDTO(String taskid, String caseid, String decompositionOrder) {
        this.taskid = taskid;
        this.caseid = caseid;
        this.decompositionOrder = decompositionOrder;
    }

    public String getCaseid() {
        return caseid;
    }

    public void setCaseid(String caseid) {
        this.caseid = caseid;
    }

    public String getTaskid() {
        return taskid;
    }

    public void setTaskid(String taskid) {
        this.taskid = taskid;
    }

    public long getOfferedTimestamp() {
        return offeredTimestamp;
    }

    public void setOfferedTimestamp(long offeredTimestamp) {
        this.offeredTimestamp = offeredTimestamp;
    }

    public long getAllocatedTimestamp() {
        return allocatedTimestamp;
    }

    public void setAllocatedTimestamp(long allocatedTimestamp) {
        this.allocatedTimestamp = allocatedTimestamp;
    }

    public long getStartTimestamp() {
        return startTimestamp;
    }

    public void setStartTimestamp(long startTimestamp) {
        this.startTimestamp = startTimestamp;
    }

    public long getEndTimestamp() {
        return endTimestamp;
    }

    public void setEndTimestamp(long endTimestamp) {
        this.endTimestamp = endTimestamp;
    }

    public boolean isCancelled() {
        return cancelled;
    }

    public void setCancelled(boolean cancelled) {
        this.cancelled = cancelled;
    }

    public boolean isAutomated() {
        return automated;
    }

    public void setAutomated(boolean automated) {
        this.automated = automated;
    }

    public String getDecompositionOrder() {
        return decompositionOrder;
    }

    public void setDecompositionOrder(String decompositionOrder) {
        this.decompositionOrder = decompositionOrder;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public long getLatestEventTimestamp() {
        return latestEventTimestamp;
    }

    public void setLatestEventTimestamp(long latestEventTimestamp) {
        this.latestEventTimestamp = latestEventTimestamp;
    }

    public Map<String, Set<String>> getParticipants() {
        return participants;
    }

    public void setParticipants(Map<String, Set<String>> participants) {
        this.participants = participants;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getResourceTime() {
        return resourceTime;
    }

    public void setResourceTime(long resourceTime) {
        this.resourceTime = resourceTime;
    }

    public long getAge() {
        return age;
    }

    public void setAge(long age) {
        this.age = age;
    }

    public long getQueueTime() {
        return queueTime;
    }

    public void setQueueTime(long queueTime) {
        this.queueTime = queueTime;
    }

    public long getCreated() {
        return created;
    }

    public void setCreated(long created) {
        this.created = created;
    }

    public long getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(long completionTime) {
        this.completionTime = completionTime;
    }
}