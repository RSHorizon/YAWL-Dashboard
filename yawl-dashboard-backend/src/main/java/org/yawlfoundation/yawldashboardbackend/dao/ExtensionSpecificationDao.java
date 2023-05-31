package org.yawlfoundation.yawldashboardbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionSpecification;
/**
 * @author Robin Steinwarz
 */
public interface ExtensionSpecificationDao extends JpaRepository<ExtensionSpecification, String> {


    @Query(value = "SELECT * FROM extension_specifications e WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    ExtensionSpecification findByComposedID(String specificationID, String version, String uri);

    @Modifying
    @Query(value = "UPDATE extension_specifications e SET e.core = ?4 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    void setCore(String specificationID, String version, String uri, Boolean core);

    @Modifying
    @Query(value = "UPDATE extension_specifications e SET e.specification_time_limit = ?4 WHERE e.specification_id = ?1 AND e.specversion = ?2 AND e.uri = ?3", nativeQuery = true)
    void setSpecificationTimeLimit(String specificationID, String version, String uri, Long specificationTimeLimit);

}
