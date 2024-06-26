/*
 * Copyright (c) 2004-2012 The YAWL Foundation. All rights reserved.
 * The YAWL Foundation is a collaboration of individuals and
 * organisations who are committed to improving workflow technology.
 *
 * This file is part of YAWL. YAWL is free software: you can
 * redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation.
 *
 * YAWL is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
 * Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with YAWL. If not, see <http://www.gnu.org/licenses/>.
 */
package org.yawlfoundation.yawldashboardbackend.yawlclient;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.*;
import org.yawlfoundation.yawl.engine.interfce.WorkItemRecord;


/**
 * The service to manage work items.
 *
 * @author Philipp R. Thomas <philipp.thomas@floaz.de>
 * @editedBy Robin Steinwarz
 */
public interface WorkItemManager {

    List<Resource> getAllResources();

    WorkItemRecord getWorkItemById(String workItemId);

    Set<WorkItemRecord> getUnofferedWorkItems();

    Set<WorkItemRecord> getOldWorkItems(LocalDateTime boundary);

    Set<WorkItemRecord> getWorkItemsWithExpiringTimer(LocalDateTime boundary);

    int getNumberWorkItemsByCaseId(Integer caseId);

    String acceptOffer(String resourceId, String itemId);

    String startWorkItem(String resourceId, String itemId);

    String completeWorkItem(String resourceId, String itemId);


    Set<Integer> getAllCasesWithWorkItems();

    Set<WorkItemRecord> getAllWorkItemsForCase(String id, String specversion, String uri, String caseId);

    Set<WorkItemRecord> getAllWorkItemsForSpecification(String id, String specversion, String uri);

    List<Case> getAllRunningCases();

    List<Integer> getRunningCasesBySpec(Specification specification);

    List<Integer> getRunningCasesBySpec(String specificationId, String version, String uri);

    List<Integer> getCaseData(String caseId);

    Set<Case> getAllCasesFromSpecification(YSpecificationID ySpecificationID);

    List<Specification> getAllLoadedSpecifications();

    List<Specification> getSpecificationList();

    Specification getSpecificationById(YSpecificationID ySpecificationID);

    String launchCaseById(String caseId, String data);

    String launchCaseByUri(String caseUri, String data);

    String getCaseDataSchema(YSpecificationID specID);

    String synchroniseCaches();

    List<Task> getSpecificationDefinitionById(YSpecificationID ySpecificationID);
}
