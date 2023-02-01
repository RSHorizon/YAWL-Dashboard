package org.yawlfoundation.yawldashboardbackend.model;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;
import java.util.UUID;

/**
 * @author Robin Steinwarz
 */
@Entity
@IdClass(ExtensionSpecificationId.class)
@Table(name = "extensionSpecifications")
public class ExtensionSpecification {

    @Id
    @Column(name = "specificationId", columnDefinition = "varchar2(255)")
    private String specificationId;

    @Id
    @Column(name = "specversion", columnDefinition = "varchar2(255)")
    private String specversion;

    @Id
    @Column(name = "uri", columnDefinition = "varchar2(255)")
    private String uri;

    @Column(name = "core")
    private Boolean core;

    @Column(name = "specificationTimeLimit")
    private Integer specificationTimeLimit;

    public Integer getSpecificationTimeLimit() {
        return specificationTimeLimit;
    }

    public void setSpecificationTimeLimit(Integer specificationTimeLimit) {
        this.specificationTimeLimit = specificationTimeLimit;
    }

    public Boolean getCore() {
        return core;
    }

    public void setCore(Boolean core) {
        this.core = core;
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

