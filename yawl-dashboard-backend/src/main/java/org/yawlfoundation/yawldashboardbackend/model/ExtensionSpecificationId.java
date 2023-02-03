package org.yawlfoundation.yawldashboardbackend.model;

import java.io.Serializable;

/**
 * @author Robin Steinwarz
 */
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

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }

        if (obj.getClass() != this.getClass()) {
            return false;
        }

        final ExtensionSpecificationId other = (ExtensionSpecificationId) obj;
        if (this.specificationId != null && other.specificationId != null
                && this.specversion != null && other.specversion != null
                && this.uri != null && other.uri != null
                && this.specificationId.equals(other.specificationId)
                && this.specversion.equals(other.specversion)
                && this.uri.equals(other.uri)) {
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
        return hash;
    }

}
