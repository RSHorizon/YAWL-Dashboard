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
package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionSpecificationDao;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionTaskDao;
import org.yawlfoundation.yawldashboardbackend.model.*;
import org.yawlfoundation.yawldashboardbackend.yawlclient.*;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Resource;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Task;

import javax.transaction.Transactional;
import java.util.*;

/**
 * @author Robin Steinwarz
 */

@RestController
@Secured("ROLE_ADMIN")
class SpecificationController {

    @Autowired
    private WorkItemManager workItemManager;

    @Autowired
    private ResourceManager resourceManager;
    @Autowired
    private ResourceLogManager resourceLogManager;
    @Autowired
    private ExtensionSpecificationDao extensionSpecificationDao;
    @Autowired
    private ExtensionTaskDao extensionTaskDao;

    @Autowired
    InterfaceEManagerImpl interfaceEManager;

    @Autowired
    WsManagerImpl wsManager;


    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public void testRoute() {
        YSpecificationID specId = new YSpecificationID("UID_5a1f1378-30d4-428c-abcc-955360d51983", "0.34", "ThesisProcessV3");
        YSpecificationID worklet = new YSpecificationID("UID_e6626c72-29c2-4439-b330-1ce2bd1ebd52", "0.1", "EmergencyNotEnoughCopiesWorklet");
        //resourceLogManager.getSpecificationEvents(new YSpecificationID("UID_e63327e0-099f-4eae-b622-5fc30c467f46", "0.79", "ReiseangebotEntwicklung"));
        List<Event> events = resourceLogManager.getSpecificationEvents(specId);
        List<Specification> specificationsSD = workItemManager.getSpecificationList();
        //workItemManager.getSpecificationList();
        //String things = interfaceEManager.getSpecificationXESLog(specId);
        //String things2 = interfaceEManager.getCompleteCaseLogsForSpecification(specId);
        String things3 = wsManager.getRunningWorklets();
        String things4 = wsManager.getOrphanedWorklets();
        String things5 = wsManager.getWorklet(worklet);
        String things6 = wsManager.getWorkletNames();
        String things7 = wsManager.getWorkletInfoList();
        //String things5 = interfaceEManager.getCompleteCaseLog("36");
        //List<Event> things6 = interfaceEManager.getCaseEvents("36");
        //List<Event> things7 = interfaceEManager.getCaseEvents("37");
        //List<Event> things8 = interfaceEManager.getCaseEvents("38");
        //workItemManager.getSpecificationDefinitionById(specId);
        List<Resource> resources = resourceManager.getResources();
        List<Specification> specifications = interfaceEManager.getAllSpecifications();
        String things100 = resourceLogManager.getMergedXESLog(specId);
        System.out.println("Test completed.");
    }

    @RequestMapping(value = "/api/specification", method = RequestMethod.GET)
    public List<Specification> getSpecifications() {
        return workItemManager.getAllLoadedSpecifications();
    }

    @RequestMapping(value = "/api/specification/{uri}/{specificationID}/{specversion}", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public Specification getSpecification(@PathVariable("specificationID") String specificationID,
                                          @PathVariable("specversion") String specversion,
                                          @PathVariable("uri") String uri) {
        return workItemManager.getSpecificationById(new YSpecificationID(specificationID, specversion, uri));
    }

    /*
    @RequestMapping(value = "/api/specification/{uri}/{specificationID}/{specversion}/definition",
            method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public List<Task> getTaskDefinitions(@PathVariable("specificationID") String specificationID,
                                         @PathVariable("specversion") String specversion,
                                         @PathVariable("uri") String uri) {
        return workItemManager.getSpecificationDefinitionById(new YSpecificationID(specificationID, specversion, uri));
    }*/


    @RequestMapping(value = "/api/specification/extension", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public List<ExtensionSpecification> getExtensionAttributes() {
        return extensionSpecificationDao.findAll();
    }

    @RequestMapping(value = "/api/specification/extension/{uri}/{specificationID}/{specversion}", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public ExtensionSpecification getExtensionAttributesForSpecifications(
            @PathVariable("specificationID") String specificationID,
            @PathVariable("specversion") String specversion,
            @PathVariable("uri") String uri
    ) {
        ExtensionSpecification extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);

        if (extensionSpecification == null) {
            createLocalEntities(specificationID, specversion, uri);
            extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);
        }
        return extensionSpecification;
    }

    @RequestMapping(value = "/api/specification/task/{uri}/{specificationID}/{specversion}", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public List<ExtensionTask> getExtensionTaskAttributes(
            @PathVariable("specificationID") String specificationID,
            @PathVariable("specversion") String specversion,
            @PathVariable("uri") String uri
    ) {
        ExtensionSpecification extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);

        if (extensionSpecification == null) {
            createLocalEntities(specificationID, specversion, uri);
        }
        return extensionTaskDao.findAllByComposedID(specificationID, specversion, uri);
    }

    @RequestMapping(value = "/api/specification/extension/{uri}/{specificationID}/{specversion}/core",
            params = "core", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeSpecificationCore(@PathVariable("specificationID") String specificationID,
                                       @PathVariable("specversion") String specversion,
                                       @PathVariable("uri") String uri,
                                       @RequestParam("core") Boolean core) {
        extensionSpecificationDao.setCore(specificationID, specversion, uri, core);
    }

    @RequestMapping(value = "/api/specification/extension/{uri}/{specificationID}/{specversion}/specificationTimeLimit",
            params = "specificationTimeLimit", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeSpecificationTimeLimit(@PathVariable("specificationID") String specificationID,
                                            @PathVariable("specversion") String specversion,
                                            @PathVariable("uri") String uri,
                                            @RequestParam("specificationTimeLimit") Long specificationTimeLimit) {
        extensionSpecificationDao.setSpecificationTimeLimit(specificationID, specversion, uri, specificationTimeLimit);
    }

    @RequestMapping(value = "/api/specification/extension/{uri}/{specificationID}/{specversion}/{taskid}/costResourceHour",
            params = "costResourceHour", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeCostResourceHour(@PathVariable("specificationID") String specificationID,
                                      @PathVariable("specversion") String specversion,
                                      @PathVariable("uri") String uri,
                                      @PathVariable("taskid") String taskid,
                                      @RequestParam("costResourceHour") Long costResourceHour) {
        extensionTaskDao.setCostResourceHour(specificationID, specversion, uri, taskid, costResourceHour);
    }

    @RequestMapping(value = "/api/specification/task/{uri}/{specificationID}/{specversion}/{taskid}/maxTaskAge",
            params = "maxTaskAge", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeMaxTaskAge(@PathVariable("specificationID") String specificationID,
                                @PathVariable("specversion") String specversion,
                                @PathVariable("uri") String uri,
                                @PathVariable("taskid") String taskid,
                                @RequestParam("maxTaskAge") Long maxTaskAge) {
        extensionTaskDao.setMaxTaskAge(specificationID, specversion, uri, taskid, maxTaskAge);
    }

    @RequestMapping(value = "/api/specification/task/{uri}/{specificationID}/{specversion}/{taskid}/maxQueueAge",
            params = "maxQueueAge", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void storeMaxQueueAge(@PathVariable("specificationID") String specificationID,
                                 @PathVariable("specversion") String specversion,
                                 @PathVariable("uri") String uri,
                                 @PathVariable("taskid") String taskid,
                                 @RequestParam("maxQueueAge") Long maxQueueAge) {
        extensionTaskDao.setMaxQueueAge(specificationID, specversion, uri, taskid, maxQueueAge);
    }

    @RequestMapping(value = "/api/specification/task/{uri}/{specificationID}/{specversion}/{taskid}/setAttributes",
            params = "maxQueueAge", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public void setAllAttributes(@PathVariable("specificationID") String specificationID,
                                 @PathVariable("specversion") String specversion,
                                 @PathVariable("uri") String uri,
                                 @PathVariable("taskid") String taskid,
                                 @RequestParam("costResourceHour") Long costResourceHour,
                                 @RequestParam("maxTaskAge") Long maxTaskAge,
                                 @RequestParam("maxQueueAge") Long maxQueueAge) {
        extensionTaskDao.setAttributes(specificationID, specversion, uri, taskid, costResourceHour, maxTaskAge, maxQueueAge);
    }

    public void createLocalEntities(String specificationID, String specversion, String uri) {
        List<Task> tasks = workItemManager.getSpecificationDefinitionById(new YSpecificationID(specificationID, specversion, uri));

        ExtensionSpecification newExtensionSpecification = new ExtensionSpecification();
        newExtensionSpecification.setSpecificationId(specificationID);
        newExtensionSpecification.setSpecversion(specversion);
        newExtensionSpecification.setUri(uri);
        newExtensionSpecification.setCore(false);
        newExtensionSpecification.setSpecificationTimeLimit(0L);
        extensionSpecificationDao.save(newExtensionSpecification);

        List<ExtensionTask> extensionTasks = new ArrayList<>();

        tasks.forEach(task -> {
            ExtensionTask extensionTask = new ExtensionTask();
            extensionTask.setTaskid(task.getId());
            extensionTask.setSpecificationId(specificationID);
            extensionTask.setSpecversion(specversion);
            extensionTask.setUri(uri);
            extensionTask.setCostResourceHour(0L);
            extensionTask.setMaxTaskAge(0L);
            extensionTask.setMaxQueueAge(0L);
            extensionTaskDao.save(extensionTask);
            extensionTasks.add(extensionTask);
        });
    }

}
