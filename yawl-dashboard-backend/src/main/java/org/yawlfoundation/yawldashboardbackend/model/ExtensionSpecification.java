package org.yawlfoundation.yawldashboardbackend.model;

import com.nimbusds.jose.crypto.impl.CompositeKey;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

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

    @Column(name = "costResourceHour")
    private Integer costResourceHour;

    @Column(name = "maxTaskAge")
    private Integer maxTaskAge;

    @Column(name = "maxQueueAge")
    private Integer maxQueueAge;

    public Integer getSpecificationTimeLimit() {
        return specificationTimeLimit;
    }

    public void setSpecificationTimeLimit(Integer specificationTimeLimit) {
        this.specificationTimeLimit = specificationTimeLimit;
    }

    public Integer getCostResourceHour() {
        return costResourceHour;
    }

    public void setCostResourceHour(Integer costResourceHour) {
        this.costResourceHour = costResourceHour;
    }

    public Integer getMaxTaskAge() {
        return maxTaskAge;
    }

    public void setMaxTaskAge(Integer maxTaskAge) {
        this.maxTaskAge = maxTaskAge;
    }

    public Integer getMaxQueueAge() {
        return maxQueueAge;
    }

    public void setMaxQueueAge(Integer maxQueueAge) {
        this.maxQueueAge = maxQueueAge;
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

