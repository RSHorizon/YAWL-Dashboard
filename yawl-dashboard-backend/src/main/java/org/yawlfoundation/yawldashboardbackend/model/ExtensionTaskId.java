package org.yawlfoundation.yawldashboardbackend.model;

import java.io.Serializable;

public class ExtensionTaskId implements Serializable {
    private String specificationId;
    private String specversion;
    private String uri;
    private String taskId;

    public ExtensionTaskId() {

    }

    public ExtensionTaskId(String specificationId, String specversion, String uri, String taskId) {
        this.specificationId = specificationId;
        this.specversion = specversion;
        this.uri = uri;
        this.taskId = taskId;
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

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }
}
