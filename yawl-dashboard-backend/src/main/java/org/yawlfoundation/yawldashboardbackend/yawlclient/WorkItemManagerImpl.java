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

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Comparator;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.jdom2.JDOMException;
import org.yawlfoundation.yawl.elements.YDecomposition;
import org.yawlfoundation.yawl.elements.YSpecification;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawl.engine.interfce.SpecificationData;
import org.yawlfoundation.yawl.engine.interfce.WorkItemRecord;
import org.yawlfoundation.yawl.exceptions.YSyntaxException;
import org.yawlfoundation.yawl.resourcing.rsInterface.WorkQueueGatewayClient;
import org.yawlfoundation.yawl.unmarshal.YMarshal;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.CaseMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.FailureMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.ParticipantMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.SpecificationMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.WorkItemMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Case;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Participant;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;
import org.yawlfoundation.yawl.resourcing.QueueSet;
import org.yawlfoundation.yawl.resourcing.WorkQueue;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Task;


/**
 * CreateUserScript.
 *
 * @author Philipp Thomas <philipp.thomas@floaz.de>
 * @editedBy Robin Steinwarz
 */

public class WorkItemManagerImpl implements WorkItemManager {

    private final ResourceServiceSessionPool resourceManagerSessionPool;
    private final WorkQueueGatewayClient connection;

    private final ResourceManager rm;


    public WorkItemManagerImpl(ResourceServiceSessionPool resourceManagerSessionPool, WorkQueueGatewayClient connection, ResourceManagerImpl rm) {
        this.resourceManagerSessionPool = resourceManagerSessionPool;
        this.connection = connection;
        this.rm = rm;
    }


    @Override
    public synchronized List<Participant> getAllParticipants() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAllParticipants(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                return ParticipantMarshaller.parseParticipants(result);
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public WorkItemRecord getWorkItemById(String workItemId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getWorkItem(workItemId, handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                return WorkItemMarshaller.unmarshalWorkItem(result);
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized List<WorkItemRecord> getQueuedWorkItemsById(String participantId, int queue) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getQueuedWorkItems(participantId, queue, handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                return WorkItemMarshaller.unmarshalWorkItems(result);
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized List<WorkItemRecord> getQueuedWorkItemsByUsername(String username, int queue) {
        Participant p = rm.getParticipantByName(username);
        if (p == null) {
            throw new RuntimeException("Participant \"" + username + "\" not found!");
        }
        return getQueuedWorkItemsById(p.getId(), queue);
    }


    @Override
    public synchronized Set<WorkItemRecord> getUnofferedWorkItems() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAdminQueues(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            }

            QueueSet queueSet = new QueueSet("admin", QueueSet.setType.adminSet, false);
            queueSet.fromXML(result);
            return queueSet.getQueuedWorkItems(WorkQueue.UNOFFERED);
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public Set<WorkItemRecord> getOldWorkItems(LocalDateTime boundary) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAdminQueues(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            }

            QueueSet queueSet = new QueueSet("admin", QueueSet.setType.adminSet, false);
            queueSet.fromXML(result);

            Set<WorkItemRecord> resultSet = new HashSet<>();

            Long boundarySeconds = boundary.atZone(ZoneId.systemDefault()).toEpochSecond();

            if (queueSet.getQueue(WorkQueue.WORKLISTED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.WORKLISTED).getAll()) {
                    Long offerTime = Long.parseLong(workItem.getEnablementTimeMs()) / 1000;
                    if (boundarySeconds > offerTime) {
                        resultSet.add(workItem);
                    }
                }
            }

            if (queueSet.getQueue(WorkQueue.UNOFFERED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.UNOFFERED).getAll()) {
                    Long offerTime = Long.parseLong(workItem.getEnablementTimeMs()) / 1000;
                    if (boundarySeconds > offerTime) {
                        resultSet.add(workItem);
                    }
                }
            }

            return resultSet;
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public Set<WorkItemRecord> getWorkItemsWithExpiringTimer(LocalDateTime boundary) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAdminQueues(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            }

            QueueSet queueSet = new QueueSet("admin", QueueSet.setType.adminSet, false);
            queueSet.fromXML(result);

            Set<WorkItemRecord> resultSet = new HashSet<>();

            Long boundarySeconds = boundary.atZone(ZoneId.systemDefault()).toEpochSecond();

            if (queueSet.getQueue(WorkQueue.WORKLISTED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.WORKLISTED).getAll()) {
                    if (workItem.getTimerExpiry() != null && !workItem.getTimerExpiry().isEmpty()) {
                        Long expirationDate = Long.parseLong(workItem.getTimerExpiry()) / 1000;
                        if (boundarySeconds > expirationDate) {
                            resultSet.add(workItem);
                        }
                    }
                }
            }

            if (queueSet.getQueue(WorkQueue.UNOFFERED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.UNOFFERED).getAll()) {
                    if (workItem.getTimerExpiry() != null && !workItem.getTimerExpiry().isEmpty()) {
                        Long expirationDate = Long.parseLong(workItem.getTimerExpiry()) / 1000;
                        if (boundarySeconds > expirationDate) {
                            resultSet.add(workItem);
                        }
                    }
                }
            }

            return resultSet;
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized int getNumberQueuedWorkItemsById(String participantId, int queue) {
        List<WorkItemRecord> list = getQueuedWorkItemsById(participantId, queue);
        if (list == null) {
            return 0;
        }
        return list.size();
    }


    @Override
    public synchronized int getNumberQueuedWorkItemsByUsername(String username, int queue) {
        List<WorkItemRecord> list = getQueuedWorkItemsByUsername(username, queue);
        if (list == null) {
            return 0;
        }
        return list.size();
    }


    @Override
    public synchronized int getNumberWorkItemsByCaseId(Integer caseId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAdminQueues(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            }

            QueueSet queueSet = new QueueSet("admin", QueueSet.setType.adminSet, false);
            queueSet.fromXML(result);

            int sum = 0;

            for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.WORKLISTED).getAll()) {
                if (workItem.getRootCaseID().equals(caseId.toString())) {
                    ++sum;
                }
            }

            for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.UNOFFERED).getAll()) {
                if (workItem.getRootCaseID().equals(caseId.toString())) {
                    ++sum;
                }
            }

            return sum;
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized String acceptOffer(String participantId, String itemId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.acceptOffer(participantId, itemId, handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException("Could not allocate work item! " + FailureMarshaller.parseFailure(result));
            } else {
                return result;
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized String startWorkItem(String participantId, String itemId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.startItem(participantId, itemId, handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException("Could not start work item! " + FailureMarshaller.parseFailure(result));
            } else {
                return result;
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized String completeWorkItem(String participantId, String itemId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.completeItem(participantId, itemId, handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException("Could not complete work item! " + FailureMarshaller.parseFailure(result));
            } else {
                return result;
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized String launchCaseById(String caseId, String data) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getLoadedSpecs(handle.getRawHandle());
            List<Specification> specifications = SpecificationMarshaller.parseSepcifications(result);

            Optional<Specification> foundSpecification = specifications.stream()
                    .filter((t) -> t.getId().equals(caseId))
                    .sorted(Comparator.comparing(Specification::getSpecversion, Comparator.reverseOrder()))
                    .findFirst();

            if (!foundSpecification.isPresent()) {
                throw new RuntimeException("No specification found with this name.");
            }

            Specification specification = foundSpecification.get();
            return launchCase(specification, data);
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized String launchCaseByUri(String caseUri, String data) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getLoadedSpecs(handle.getRawHandle());
            List<Specification> specifications = SpecificationMarshaller.parseSepcifications(result);
            Optional<Specification> foundSpecification = specifications.stream()
                    .filter((t) -> t.getUri().equals(caseUri))
                    .sorted(Comparator.comparing(Specification::getSpecversion, Comparator.reverseOrder()))
                    .findFirst();

            if (!foundSpecification.isPresent()) {
                throw new RuntimeException("No specification found with this uri.");
            }

            Specification specification = foundSpecification.get();
            return launchCase(specification, data);
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    protected synchronized String launchCase(Specification specification, String data) {
        YSpecificationID specId = new YSpecificationID(specification.getId(), specification.getSpecversion(), specification.getUri());
        return launchCase(specId, data);
    }


    protected synchronized String launchCase(YSpecificationID specId, String data) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.launchCase(specId, data, handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                return result;
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public synchronized Set<Integer> getAllCasesWithWorkItems() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAdminQueues(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            }

            QueueSet queueSet = new QueueSet("admin", QueueSet.setType.adminSet, false);
            queueSet.fromXML(result);

            Set<Integer> caseIds = new HashSet<>();

            if (queueSet.getQueue(WorkQueue.WORKLISTED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.WORKLISTED).getAll()) {
                    caseIds.add(Integer.parseInt(workItem.getRootCaseID()));
                }
            }

            if (queueSet.getQueue(WorkQueue.UNOFFERED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.UNOFFERED).getAll()) {
                    caseIds.add(Integer.parseInt(workItem.getRootCaseID()));
                }
            }

            return caseIds;
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public Set<WorkItemRecord> getAllWorkItemsForCase(String id, String specversion, String uri, String caseId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAdminQueues(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            }

            QueueSet queueSet = new QueueSet("admin", QueueSet.setType.adminSet, false);
            queueSet.fromXML(result);

            Set<WorkItemRecord> resultSet = new HashSet<>();

            if (queueSet.getQueue(WorkQueue.WORKLISTED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.WORKLISTED).getAll()) {
                    workItem.setDataList(null);
                    workItem.setUpdatedData(null);
                    resultSet.add(workItem);
                }
            }

            if (queueSet.getQueue(WorkQueue.UNOFFERED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.UNOFFERED).getAll()) {
                    workItem.setDataList(null);
                    workItem.setUpdatedData(null);
                    resultSet.add(workItem);
                }
            }

            resultSet = resultSet.stream().filter(workItemRecord ->
                    workItemRecord.getSpecIdentifier().equals(id) &&
                            workItemRecord.getSpecVersion().equals(specversion) &&
                            workItemRecord.getSpecURI().equals(uri) &&
                            workItemRecord.getCaseID().split("\\.")[0].equals(caseId)).collect(Collectors.toSet());

            return resultSet;
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public Set<WorkItemRecord> getAllWorkItemsForSpecification(String id, String specversion, String uri) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAdminQueues(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            }

            QueueSet queueSet = new QueueSet("admin", QueueSet.setType.adminSet, false);
            queueSet.fromXML(result);

            Set<WorkItemRecord> resultSet = new HashSet<>();

            if (queueSet.getQueue(WorkQueue.WORKLISTED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.WORKLISTED).getAll()) {
                    workItem.setDataList(null);
                    workItem.setUpdatedData(null);
                    resultSet.add(workItem);
                }
            }

            if (queueSet.getQueue(WorkQueue.UNOFFERED) != null) {
                for (WorkItemRecord workItem : queueSet.getQueue(WorkQueue.UNOFFERED).getAll()) {
                    workItem.setDataList(null);
                    workItem.setUpdatedData(null);
                    resultSet.add(workItem);
                }
            }

            resultSet = resultSet.stream().filter(workItemRecord ->
                    workItemRecord.getSpecIdentifier().equals(id) &&
                            workItemRecord.getSpecVersion().equals(specversion) &&
                            workItemRecord.getSpecURI().equals(uri)).collect(Collectors.toSet());

            return resultSet;
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public synchronized List<Case> getAllRunningCases() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String specsResult = connection.getLoadedSpecs(handle.getRawHandle());
            List<Specification> specifications = SpecificationMarshaller.parseSepcifications(specsResult);

            List<Case> result = new LinkedList<>();
            for (Specification specification : specifications) {
                for (Integer caseId : getRunningCasesBySpec(specification)) {
                    result.add(new Case(caseId, specification));
                }
            }
            return result;
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized List<Integer> getRunningCasesBySpec(Specification specification) {
        YSpecificationID specId = new YSpecificationID(specification.getId(), specification.getSpecversion(), specification.getUri());
        return getRunningCasesBySpec(specId);
    }

    @Override
    public synchronized List<Integer> getRunningCasesBySpec(String specificationId, String version, String uri) {
        YSpecificationID specId = new YSpecificationID(specificationId, version, uri);
        return getRunningCasesBySpec(specId);
    }


    protected synchronized List<Integer> getRunningCasesBySpec(YSpecificationID specification) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getRunningCases(specification, handle.getRawHandle());

            if (result == null || !connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                return CaseMarshaller.parseCaseList(result);
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public synchronized List<Integer> getCaseData(String caseId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getCaseData(caseId, handle.getRawHandle());

            if (result == null || !connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                return CaseMarshaller.parseCaseList(result);
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public Set<Case> getAllCasesFromSpecification(YSpecificationID ySpecificationID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAdminQueues(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            }

            QueueSet queueSet = new QueueSet("admin", QueueSet.setType.adminSet, false);
            queueSet.fromXML(result);

            Set<WorkItemRecord> resultSet = new HashSet<>();

			/*Long boundarySeconds = boundary.atZone(ZoneId.systemDefault()).toEpochSecond();

			if(queueSet.getQueue(WorkQueue.WORKLISTED) != null) {
				for(WorkItemRecord workItem : queueSet.getQueue(WorkQueue.WORKLISTED).getAll()) {
					Long offerTime = Long.parseLong(workItem.getEnablementTimeMs()) / 1000;
					if(boundarySeconds > offerTime) {
						resultSet.add(workItem);
					}
				}
			}

			if(queueSet.getQueue(WorkQueue.UNOFFERED) != null) {
				for(WorkItemRecord workItem : queueSet.getQueue(WorkQueue.UNOFFERED).getAll()) {
					Long offerTime = Long.parseLong(workItem.getEnablementTimeMs()) / 1000;
					if(boundarySeconds > offerTime) {
						resultSet.add(workItem);
					}
				}
			}*/

            //return resultSet;
            return null;
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }


    @Override
    public synchronized List<Specification> getAllLoadedSpecifications() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getLoadedSpecs(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                List<Specification> specifications = SpecificationMarshaller.parseSepcifications(result);
                // Also get statistical data
                specifications.forEach(c -> c.setActiveCasesCount(getRunningCasesBySpec(c).size()));
                return specifications;
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public synchronized List<Specification> getSpecificationList() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getSpecList(handle.getRawHandle());

            if (!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                List<Specification> specifications = SpecificationMarshaller.parseSepcifications(result);
                // Also get statistical data
                specifications.forEach(c -> c.setActiveCasesCount(getRunningCasesBySpec(c).size()));
                return specifications;
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    public synchronized Specification getSpecificationById(YSpecificationID ySpecificationID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String specsResult = connection.getLoadedSpecs(handle.getRawHandle());

            List<Specification> specifications = SpecificationMarshaller.parseSepcifications(specsResult);

            Optional<Specification> foundSpecification = specifications.stream()
                    .filter((t) -> t.getId().equals(ySpecificationID.getIdentifier()) && t.getSpecversion().equals(ySpecificationID.getVersionAsString()))
                    .sorted(Comparator.comparing(Specification::getSpecversion, Comparator.reverseOrder()))
                    .findFirst();

            if (!foundSpecification.isPresent()) {
                throw new RuntimeException("No specification found.");
            }

            return foundSpecification.get();
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public synchronized List<Task> getSpecificationDefinitionById(YSpecificationID ySpecificationID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String specData = connection.getSpecData(ySpecificationID, handle.getRawHandle());
            try {
                SpecificationData specificationData = SpecificationMarshaller.parseSpecificationDefinition(specData);
                List<YSpecification> ySpecification = YMarshal.unmarshalSpecifications(specificationData.getAsXML());
                return ySpecification.get(0).getDecompositions().stream()
                        .filter(d -> d.getClass().getName()
                                .equals("org.yawlfoundation.yawl.elements.YAWLServiceGateway"))
                        .map(YDecomposition::getID)
                        .map(d -> new Task(d, ySpecificationID.getIdentifier(), ySpecificationID.getVersionAsString(),
                                ySpecificationID.getUri()))
                        .collect(Collectors.toList());
            } catch (YSyntaxException e) {
                throw new RuntimeException(e);
            }
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

}
