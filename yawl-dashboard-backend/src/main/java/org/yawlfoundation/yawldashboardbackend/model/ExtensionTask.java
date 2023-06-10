package org.yawlfoundation.yawldashboardbackend.model;

import javax.persistence.*;

/**
 * @author Robin Steinwarz
 */

@Entity
@IdClass(ExtensionTaskId.class)
@Table(name = "extensionTasks")
public class ExtensionTask {
    @Id
    @Column(name = "specificationId", columnDefinition = "varchar2(255)")
    private String specificationId;

    @Id
    @Column(name = "specversion", columnDefinition = "varchar2(255)")
    private String specversion;

    @Id
    @Column(name = "uri", columnDefinition = "varchar2(255)")
    private String uri;

    @Id
    @Column(name = "taskid", columnDefinition = "varchar2(255)")
    private String taskid;

    @Column(name = "costResourceHour")
    private Long costResourceHour;

    @Column(name = "maxTaskAge")
    private Long maxTaskAge;

    @Column(name = "maxQueueAge")
    private Long maxQueueAge;

    public Long getCostResourceHour() {
        return costResourceHour;
    }

    public void setCostResourceHour(Long costResourceHour) {
        this.costResourceHour = costResourceHour;
    }

    public Long getMaxTaskAge() {
        return maxTaskAge;
    }

    public void setMaxTaskAge(Long maxTaskAge) {
        this.maxTaskAge = maxTaskAge;
    }

    public Long getMaxQueueAge() {
        return maxQueueAge;
    }

    public void setMaxQueueAge(Long maxQueueAge) {
        this.maxQueueAge = maxQueueAge;
    }

    public String getTaskid() {
        return taskid;
    }

    public void setTaskid(String taskid) {
        this.taskid = taskid;
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
