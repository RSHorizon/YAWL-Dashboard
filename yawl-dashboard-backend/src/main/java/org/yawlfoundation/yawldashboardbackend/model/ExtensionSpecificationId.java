package org.yawlfoundation.yawldashboardbackend.model;

import java.io.Serializable;

public class ExtensionSpecificationId implements Serializable {
    private String specificationId;
    private String specversion;
    private String uri;

    public ExtensionSpecificationId() {

    }

    public ExtensionSpecificationId(String specificationId, String specversion, String uri) {
        this.specificationId = specificationId;
        this.specversion = specversion;
        this.uri = uri;
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

}
