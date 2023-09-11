package org.yawlfoundation.yawldashboardbackend.dto;

import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;

import java.util.*;

/**
 * @author Robin Steinwarz
 */
public class WorkitemDTO {
    private String taskid = "";
    private String name = "";
    private String caseid = "";
    private String order = "";
    // <Resources_ID, Set<Event>>

    private Map<String, Set<String>> resources = new HashMap<>();
    private boolean automated = false;
    private boolean cancelled = false;
    private String status;
    private List<Event> events;
    private long latestEventTimestamp = 0L;
    private long offeredTimestamp = 0L;
    private long allocatedTimestamp = 0L;
    private long startTimestamp = 0L;
    private long endTimestamp = 0L;
    private long completionTime = 0L;
    private long queueTime = 0L;
    private long resourceTime = 0L;
    private long leadTime = 0L;
    private long created = 0L;

    public WorkitemDTO(String taskid, String caseid, String order) {
        this.taskid = taskid;
        this.caseid = caseid;
        this.order = order;
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

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
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

    public Map<String, Set<String>> getResources() {
        return resources;
    }

    public void setResources(Map<String, Set<String>> resources) {
        this.resources = resources;
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

    public long getLeadTime() {
        return leadTime;
    }

    public void setLeadTime(long leadTime) {
        this.leadTime = leadTime;
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

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }
}