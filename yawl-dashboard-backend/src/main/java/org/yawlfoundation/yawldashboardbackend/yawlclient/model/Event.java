package org.yawlfoundation.yawldashboardbackend.yawlclient.model;

/**
 * @author Robin Steinwarz
 */
public class Event {
    String speckey;
    String caseid;
    String taskid;
    String itemid;
    String resourceid;
    String eventtype;
    String timestamp;
    String _key;

    public Event(String speckey, String caseid, String taskid, String itemid, String resourceid, String eventtype, String timestamp, String _key) {
        this.speckey = speckey;
        this.caseid = caseid;
        this.taskid = taskid;
        this.itemid = itemid;
        this.resourceid = resourceid;
        this.eventtype = eventtype;
        this.timestamp = timestamp;
        this._key = _key;
    }

    public String getSpeckey() {
        return speckey;
    }

    public void setSpeckey(String speckey) {
        this.speckey = speckey;
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

    public String getItemid() {
        return itemid;
    }

    public void setItemid(String itemid) {
        this.itemid = itemid;
    }

    public String getResourceid() {
        return resourceid;
    }

    public void setResourceid(String resourceid) {
        this.resourceid = resourceid;
    }

    public String getEventtype() {
        return eventtype;
    }

    public void setEventtype(String eventtype) {
        this.eventtype = eventtype;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String get_key() {
        return _key;
    }

    public void set_key(String _key) {
        this._key = _key;
    }
}
