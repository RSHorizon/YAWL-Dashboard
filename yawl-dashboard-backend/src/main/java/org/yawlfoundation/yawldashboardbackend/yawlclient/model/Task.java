package org.yawlfoundation.yawldashboardbackend.yawlclient.model;

/**
 * The dto for specification.
 * @author Philipp Thomas
 * @editedBy Robin Steinwarz
 */

public class Task {
    String id;
    String order;
    String specificationId;
    String specversion;
    String uri;

    public Task(String id, String specificationId, String specversion, String uri) {
        this.id = id;
        this.specificationId = specificationId;
        this.specversion = specversion;
        this.uri = uri;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSpecificationId() {
        return specificationId;
    }

    public void setSpecificationId(String specificationId) {
        this.specificationId = specificationId;
    }

    public String getSpecversion() {
        return specversion;
    }

    public void setSpecversion(String specversion) {
        this.specversion = specversion;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }
}
