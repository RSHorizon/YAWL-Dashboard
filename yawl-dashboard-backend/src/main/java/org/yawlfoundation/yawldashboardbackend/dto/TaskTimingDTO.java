package org.yawlfoundation.yawldashboardbackend.dto;

import java.util.HashSet;
import java.util.Set;

public class TaskTimingDTO {
    private String taskid;
    private String caseid;
    private Set<String> participantsIds = new HashSet<>();
    private boolean automated = false;
    private boolean cancelled = false;
    private long offeredTimestamp = 0L;
    private long allocatedTimestamp = 0L;
    private long startTimestamp = 0L;
    private long endTimestamp = 0L;

    public TaskTimingDTO(String taskid, String caseid) {
        this.taskid = taskid;
        this.caseid = caseid;
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

    public Set<String> getParticipantsIds() {
        return participantsIds;
    }

    public void setParticipantsIds(Set<String> participantsIds) {
        this.participantsIds = participantsIds;
    }
}