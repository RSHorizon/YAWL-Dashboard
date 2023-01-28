package org.yawlfoundation.yawldashboardbackend.dto;

import java.io.Serializable;

public class CaseStatisticDTO implements Serializable {
    private String caseid;
    private boolean cancelled;
    private long start = 0;
    private long end = 0;
    private long age = 0;
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

    public long getAge() {
        return age;
    }

    public void setAge(long age) {
        this.age = age;
    }

    public long getRunningWorkitemsCount() {
        return runningWorkitemsCount;
    }

    public void setRunningWorkitemsCount(long runningWorkitemsCount) {
        this.runningWorkitemsCount = runningWorkitemsCount;
    }

    public void incRunningWorkitemsCount(){
        this.runningWorkitemsCount++;
    }

    public void decRunningWorkitemsCount(){
        this.runningWorkitemsCount--;
    }

    public long getQueuedWorkitemsCount() {
        return queuedWorkitemsCount;
    }

    public void setQueuedWorkitemsCount(long queuedWorkitemsCount) {
        this.queuedWorkitemsCount = queuedWorkitemsCount;
    }

    public void incQueuedWorkitemsCount(){
        this.queuedWorkitemsCount++;
    }

    public void decQueuedWorkitemsCount(){
        this.queuedWorkitemsCount--;
    }

    public String getCaseid() {
        return caseid;
    }

    public void setCaseid(String caseid) {
        this.caseid = caseid;
    }
}
