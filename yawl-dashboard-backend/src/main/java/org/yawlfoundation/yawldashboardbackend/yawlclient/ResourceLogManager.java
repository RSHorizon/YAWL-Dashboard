package org.yawlfoundation.yawldashboardbackend.yawlclient;

import org.yawlfoundation.yawl.engine.YSpecificationID;

public interface ResourceLogManager {
    String getCaseEvents(String caseId);

    String getSpecificationEvents(YSpecificationID specID);

    String getStatisticsForSpecification(YSpecificationID specID);

    String getTaskStatisticsForSpecification(YSpecificationID specID);

    String getTaskStatisticsForCase(String caseId);
}
