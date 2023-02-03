package org.yawlfoundation.yawldashboardbackend.model;

import java.io.Serializable;

/**
 * @author Robin Steinwarz
 */

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

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }

        if (obj.getClass() != this.getClass()) {
            return false;
        }

        final ExtensionTaskId other = (ExtensionTaskId) obj;
        if (this.specificationId != null && other.specificationId != null
                && this.specversion != null && other.specversion != null
                && this.uri != null && other.uri != null
                && this.taskid != null && other.taskid != null
                && this.specificationId.equals(other.specificationId)
                && this.specversion.equals(other.specversion)
                && this.uri.equals(other.uri)
                && this.taskid.equals(other.taskid)) {
            return true;
        }

        return false;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 53 * hash + (this.specificationId != null ? this.specificationId.hashCode() : 0);
        hash = 53 * hash + (this.specversion != null ? this.specversion.hashCode() : 0);
        hash = 53 * hash + (this.uri != null ? this.uri.hashCode() : 0);
        hash = 53 * hash + (this.taskid != null ? this.taskid.hashCode() : 0);
        return hash;
    }
}
