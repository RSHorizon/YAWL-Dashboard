package org.yawlfoundation.yawldashboardbackend.model;

import java.io.Serializable;

public class ExtensionTaskId implements Serializable {
    private String specificationId;
    private String specversion;
    private String uri;
    private String taskid;

    public ExtensionTaskId() {

    }

    public ExtensionTaskId(String specificationId, String specversion, String uri, String taskid) {
        this.specificationId = specificationId;
        this.specversion = specversion;
        this.uri = uri;
        this.taskid = taskid;
    }

    public String getSpecversion() {
        return specversion;
    }

    public void setSpecversion(String specversion) {
        this.specversion = specversion;
    }

    public String getSpecificationId() {
        return specificationId;
    }

    public void setSpecificationId(String specificationId) {
        this.specificationId = specificationId;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getTaskid() {
        return taskid;
    }

    public void setTaskid(String taskid) {
        this.taskid = taskid;
    }
}
