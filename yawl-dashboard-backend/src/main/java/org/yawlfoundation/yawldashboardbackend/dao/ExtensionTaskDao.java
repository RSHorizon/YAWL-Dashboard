package org.yawlfoundation.yawldashboardbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionSpecification;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionTask;

import java.util.List;

public interface ExtensionTaskDao extends JpaRepository<ExtensionTask, String> {

    @Query(value = "SELECT * FROM extension_tasks e WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    List<ExtensionTask> findAllByComposedID(String specificationID, String version, String uri);

    @Modifying
    @Query(value = "UPDATE extension_tasks e SET e.cost_resource_hour = ?5 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3 AND e.task_id = ?4", nativeQuery = true)
    void setCostResourceHour(String specificationID, String version, String uri, String taskId, Integer costResourceHour);

    @Modifying
    @Query(value = "UPDATE extension_tasks e SET e.max_task_age = ?5 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3 AND e.task_id = ?4", nativeQuery = true)
    void setMaxTaskAge(String specificationID, String version, String uri, String taskId, Integer maxTaskAge);

    @Modifying
    @Query(value = "UPDATE extension_tasks e SET e.max_queue_age = ?5 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3 AND e.task_id = ?4", nativeQuery = true)
    void setMaxQueueAge(String specificationID, String version, String uri, String taskId, Integer maxQueueAge);

    @Modifying
    @Query(value = "UPDATE extension_tasks e SET e.cost_resource_hour = ?5, e.max_task_age = ?6, e.max_queue_age = ?7 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3 AND e.task_id = ?4", nativeQuery = true)
    void setAttributes(String specificationID, String version, String uri, String taskId, Integer costResourceHour, Integer maxTaskAge, Integer maxQueueAge);


}
