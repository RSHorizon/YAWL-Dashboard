package org.yawlfoundation.yawldashboardbackend.yawlclient;

import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.SpecificationStatistic;

import java.util.List;

/**
 * @author Robin Steinwarz
 */
public interface ResourceLogManager {
    List<Event> getCaseEvents(String caseId);

    List<Event> getSpecificationEvents(YSpecificationID specID);

    SpecificationStatistic getStatisticsForSpecification(YSpecificationID specID);

    String getTaskStatisticsForSpecification(YSpecificationID specID);

    String getTaskStatisticsForCase(String caseId);

    YSpecificationID getSpecificationIdentifiers(String speckey);

    List<Event> getAllResourceEvents(YSpecificationID specID);
}
