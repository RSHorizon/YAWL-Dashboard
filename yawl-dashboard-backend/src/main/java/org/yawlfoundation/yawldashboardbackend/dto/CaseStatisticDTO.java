package org.yawlfoundation.yawldashboardbackend.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Robin Steinwarz
 */
public class CaseStatisticDTO implements Serializable {
    private String caseid;
    private boolean cancelled = false;
    private List<WorkitemDTO> workitemDTOS = new ArrayList<>();
    private List<WorkitemDTO> queue = new ArrayList<>();
    private long start = 0;
    private long end = 0;
    private long queueTime = 0;
    private long completionTime = 0;
    private long resourceTime = 0;
    private long leadTime = 0;
    private long runningWorkitemsCount = 0;
    private long queuedWorkitemsCount = 0;


    public CaseStatisticDTO(String caseid) {
        this.caseid = caseid;
    }

    public boolean isCancelled() {
        return cancelled;
    }

    public void setCancelled(boolean cancelled) {
        this.cancelled = cancelled;
    }

    public long getStart() {
        return start;
    }

    public void setStart(long start) {
        this.start = start;
    }

    public long getEnd() {
        return end;
    }

    public void setEnd(long end) {
        this.end = end;
    }

    public long getLeadTime() {
        return leadTime;
    }

    public void setLeadTime(long leadTime) {
        this.leadTime = leadTime;
    }

    public long getRunningWorkitemsCount() {
        return runningWorkitemsCount;
    }

    public void setRunningWorkitemsCount(long runningWorkitemsCount) {
        this.runningWorkitemsCount = runningWorkitemsCount;
    }

    public void incRunningWorkitemsCount() {
        this.runningWorkitemsCount++;
    }

    public void decRunningWorkitemsCount() {
        this.runningWorkitemsCount--;
    }

    public long getQueuedWorkitemsCount() {
        return queuedWorkitemsCount;
    }

    public void setQueuedWorkitemsCount(long queuedWorkitemsCount) {
        this.queuedWorkitemsCount = queuedWorkitemsCount;
    }

    public void incQueuedWorkitemsCount() {
        this.queuedWorkitemsCount++;
    }

    public void decQueuedWorkitemsCount() {
        this.queuedWorkitemsCount--;
    }

    public String getCaseid() {
        return caseid;
    }

    public void setCaseid(String caseid) {
        this.caseid = caseid;
    }

    public List<WorkitemDTO> getWorkitemDTOS() {
        return workitemDTOS;
    }

    public void setWorkitemDTOS(List<WorkitemDTO> workitemDTOS) {
        this.workitemDTOS = workitemDTOS;
    }

    public long getResourceTime() {
        return resourceTime;
    }

    public void setResourceTime(long resourceTime) {
        this.resourceTime = resourceTime;
    }

    public List<WorkitemDTO> getQueue() {
        return queue;
    }

    public void setQueue(List<WorkitemDTO> queue) {
        this.queue = queue;
    }

    public long getQueueTime() {
        return queueTime;
    }

    public void setQueueTime(long queueTime) {
        this.queueTime = queueTime;
    }

    public long getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(long completionTime) {
        this.completionTime = completionTime;
    }
}
