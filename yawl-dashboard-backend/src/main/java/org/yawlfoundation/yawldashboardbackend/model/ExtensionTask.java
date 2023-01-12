package org.yawlfoundation.yawldashboardbackend.model;

import javax.persistence.*;

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
    @Column(name = "taskId", columnDefinition = "varchar2(255)")
    private String taskId;

    @Column(name = "costResourceHour")
    private Integer costResourceHour;

    @Column(name = "maxTaskAge")
    private Integer maxTaskAge;

    @Column(name = "maxQueueAge")
    private Integer maxQueueAge;

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

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
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
