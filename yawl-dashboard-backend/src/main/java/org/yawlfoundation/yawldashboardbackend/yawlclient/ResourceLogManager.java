package org.yawlfoundation.yawldashboardbackend.yawlclient;

import org.yawlfoundation.yawl.engine.YSpecificationID;

public interface ResourceLogManager {
    String getSpecificationStatistics(YSpecificationID specID);
}
