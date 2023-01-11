package org.yawlfoundation.yawldashboardbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionSpecification;

public interface ExtensionSpecificationDao extends JpaRepository<ExtensionSpecification, String> {


    @Query(value = "SELECT * FROM extension_specifications e WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    ExtensionSpecification findByComposedID(String specificationID, String version, String uri);

    @Modifying
    @Query(value = "UPDATE extension_specifications e SET e.core = ?4 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    void setCore(String specificationID, String version, String uri, Boolean core);

    @Modifying
    @Query(value = "UPDATE extension_specifications e SET e.specification_time_limit = ?4 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    void setSpecificationTimeLimit(String specificationID, String version, String uri, Integer specificationTimeLimit);

    @Modifying
    @Query(value = "UPDATE extension_specifications e SET e.cost_resource_hour = ?4 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    void setCostResourceHour(String specificationID, String version, String uri, Integer costResourceHour);

    @Modifying
    @Query(value = "UPDATE extension_specifications e SET e.max_task_age = ?4 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    void setMaxTaskAge(String specificationID, String version, String uri, Integer maxTaskAge);

    @Modifying
    @Query(value = "UPDATE extension_specifications e SET e.max_queue_age = ?3 WHERE e.specification_id = ?1 AND e.specversion = ?2", nativeQuery = true)
    void setMaxQueueAge(String specificationID, String version, String uri, Integer maxQueueAge);

}
