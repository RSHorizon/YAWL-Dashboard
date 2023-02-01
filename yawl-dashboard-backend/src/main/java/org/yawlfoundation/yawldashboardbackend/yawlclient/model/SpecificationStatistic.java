package org.yawlfoundation.yawldashboardbackend.yawlclient.model;

/**
 * The dto for specification statistics.
 * @author Robin Steinwarz
 */
public class SpecificationStatistic {
    String mergedId;
    String speckey;
    int started;
    int completed;
    int cancelled;
    String completionMaxtime;
    String completionMintime;
    String completionAvgtime;
    String cancelledMaxtime;
    String cancelledMintime;
    String cancelledAvgtime;

    public SpecificationStatistic(String mergedId, String speckey) {
        this.mergedId = mergedId;
        this.speckey = speckey;
    }

    public String getMergedId() {
        return mergedId;
    }

    public void setMergedId(String mergedId) {
        this.mergedId = mergedId;
    }

    public String getSpeckey() {
        return speckey;
    }

    public void setSpeckey(String speckey) {
        this.speckey = speckey;
    }

    public int getStarted() {
        return started;
    }

    public void setStarted(int started) {
        this.started = started;
    }

    public int getCompleted() {
        return completed;
    }

    public void setCompleted(int completed) {
        this.completed = completed;
    }

    public int getCancelled() {
        return cancelled;
    }

    public void setCancelled(int cancelled) {
        this.cancelled = cancelled;
    }

    public String getCompletionMaxtime() {
        return completionMaxtime;
    }

    public void setCompletionMaxtime(String completionMaxtime) {
        this.completionMaxtime = completionMaxtime;
    }

    public String getCompletionMintime() {
        return completionMintime;
    }

    public void setCompletionMintime(String completionMintime) {
        this.completionMintime = completionMintime;
    }

    public String getCompletionAvgtime() {
        return completionAvgtime;
    }

    public void setCompletionAvgtime(String completionAvgtime) {
        this.completionAvgtime = completionAvgtime;
    }

    public String getCancelledMaxtime() {
        return cancelledMaxtime;
    }

    public void setCancelledMaxtime(String cancelledMaxtime) {
        this.cancelledMaxtime = cancelledMaxtime;
    }

    public String getCancelledMintime() {
        return cancelledMintime;
    }

    public void setCancelledMintime(String cancelledMintime) {
        this.cancelledMintime = cancelledMintime;
    }

    public String getCancelledAvgtime() {
        return cancelledAvgtime;
    }

    public void setCancelledAvgtime(String cancelledAvgtime) {
        this.cancelledAvgtime = cancelledAvgtime;
    }
}
