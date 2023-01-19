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
import org.yawlfoundation.yawldashboardbackend.model.ExtensionSpecification;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionTask;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceLogManager;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceLogManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManager;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Task;

import javax.transaction.Transactional;
import java.util.*;


@RestController
@Secured("ROLE_ADMIN")
class SpecificationController {

	@Autowired
	private WorkItemManager workItemManager;

	@Autowired
	private ResourceLogManager resourceLogManager;
	@Autowired
	private ExtensionSpecificationDao extensionSpecificationDao;
	@Autowired
	private ExtensionTaskDao extensionTaskDao;


	@RequestMapping(value="/test", method=RequestMethod.GET)
	public void testRoute() {
		YSpecificationID specId = new YSpecificationID("UID_e63327e0-099f-4eae-b622-5fc30c467f46", "0.79", "ReiseangebotEntwicklung");
		//resourceLogManager.getSpecificationEvents(new YSpecificationID("UID_e63327e0-099f-4eae-b622-5fc30c467f46", "0.79", "ReiseangebotEntwicklung"));
		//resourceLogManager.getSpecificationEvents(specId);
		//workItemManager.getSpecificationList();
		resourceLogManager.getMergedXESLog(specId);
		//workItemManager.getSpecificationDefinitionById(new YSpecificationID("UID_e63327e0-099f-4eae-b622-5fc30c467f46", "0.79", "ReiseangebotEntwicklung"));
	}

	@RequestMapping(value="/api/specification", method=RequestMethod.GET)
	public SpecificationListResource getSpecifications() {
		return new SpecificationListResource(workItemManager.getAllLoadedSpecifications());
	}

	@RequestMapping(value="/api/specification/{uri}/{specificationID}/{specversion}", method= RequestMethod.GET)
	@ResponseBody
	@Transactional
	public Specification getSpecification(@PathVariable("specificationID") String specificationID,
										  @PathVariable("specversion") String specversion,
										  @PathVariable("uri") String uri) {
		return workItemManager.getSpecificationById(new YSpecificationID(specificationID, specversion, uri));
	}

	@RequestMapping(value="/api/specification/{uri}/{specificationID}/{specversion}/definition",
			method= RequestMethod.GET)
	@ResponseBody
	@Transactional
	public List<Task> getTaskDefinitions(@PathVariable("specificationID") String specificationID,
										 @PathVariable("specversion") String specversion,
										 @PathVariable("uri") String uri) {
		return workItemManager.getSpecificationDefinitionById(new YSpecificationID(specificationID, specversion, uri));
	}


	@RequestMapping(value="/api/specification/extension", method= RequestMethod.GET)
	@ResponseBody
	@Transactional
	public List<ExtensionSpecification> getExtensionAttributes() {
		return extensionSpecificationDao.findAll();
	}

	@RequestMapping(value="/api/specification/extension/{uri}/{specificationID}/{specversion}", method= RequestMethod.GET)
	@ResponseBody
	@Transactional
	public ExtensionSpecification getExtensionAttributesForSpecifications(
			@PathVariable("specificationID") String specificationID,
			@PathVariable("specversion") String specversion,
			@PathVariable("uri") String uri
			) {
		ExtensionSpecification extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);

		if(extensionSpecification == null){
			createLocalEntities(specificationID, specversion, uri);
			extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);
		}
		return extensionSpecification;
	}

	@RequestMapping(value="/api/specification/task/{uri}/{specificationID}/{specversion}", method= RequestMethod.GET)
	@ResponseBody
	@Transactional
	public List<ExtensionTask> getExtensionTaskAttributes(
			@PathVariable("specificationID") String specificationID,
			@PathVariable("specversion") String specversion,
			@PathVariable("uri") String uri
	) {
		ExtensionSpecification extensionSpecification = extensionSpecificationDao.findByComposedID(specificationID, specversion, uri);

		if(extensionSpecification == null){
			createLocalEntities(specificationID, specversion, uri);
		}
		return extensionTaskDao.findAllByComposedID(specificationID, specversion, uri);
	}

	public void createLocalEntities(String specificationID, String specversion, String uri){
		List<Task> tasks = workItemManager.getSpecificationDefinitionById(new YSpecificationID(specificationID, specversion, uri));

		ExtensionSpecification newExtensionSpecification = new ExtensionSpecification();
		newExtensionSpecification.setSpecificationId(specificationID);
		newExtensionSpecification.setSpecversion(specversion);
		newExtensionSpecification.setUri(uri);
		newExtensionSpecification.setCore(false);
		newExtensionSpecification.setSpecificationTimeLimit(0);
		extensionSpecificationDao.save(newExtensionSpecification);

		List<ExtensionTask> extensionTasks = new ArrayList<>();

		tasks.forEach(task -> {
			ExtensionTask extensionTask = new ExtensionTask();
			extensionTask.setTaskId(task.getId());
			extensionTask.setSpecificationId(specificationID);
			extensionTask.setSpecversion(specversion);
			extensionTask.setUri(uri);
			extensionTask.setCostResourceHour(0);
			extensionTask.setMaxTaskAge(0);
			extensionTask.setMaxQueueAge(0);
			extensionTaskDao.save(extensionTask);
			extensionTasks.add(extensionTask);
		});
	}

	@RequestMapping(value="/api/specification/extension/{uri}/{specificationID}/{specversion}/core",
			params = "core", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeSpecificationCore(@PathVariable("specificationID") String specificationID,
											@PathVariable("specversion") String specversion,
											@PathVariable("uri") String uri,
											@RequestParam("core") Boolean core) {
		extensionSpecificationDao.setCore(specificationID, specversion, uri, core);
	}

	@RequestMapping(value="/api/specification/extension/{uri}/{specificationID}/{specversion}/specificationTimeLimit",
			params = "specificationTimeLimit", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeSpecificationTimeLimit(@PathVariable("specificationID") String specificationID,
											@PathVariable("specversion") String specversion,
											@PathVariable("uri") String uri,
											@RequestParam("specificationTimeLimit") Integer specificationTimeLimit) {
		extensionSpecificationDao.setSpecificationTimeLimit(specificationID, specversion, uri, specificationTimeLimit);
	}

	@RequestMapping(value="/api/specification/extension/{uri}/{specificationID}/{specversion}/{taskId}/costResourceHour",
			params = "costResourceHour", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeCostResourceHour(@PathVariable("specificationID") String specificationID,
									  @PathVariable("specversion") String specversion,
									  @PathVariable("uri") String uri,
									  @PathVariable("taskId") String taskId,
									  @RequestParam("costResourceHour") Integer costResourceHour) {
		extensionTaskDao.setCostResourceHour(specificationID, specversion, uri, taskId, costResourceHour);
	}

	@RequestMapping(value="/api/specification/task/{uri}/{specificationID}/{specversion}/{taskId}/maxTaskAge",
			params = "maxTaskAge", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeMaxTaskAge(@PathVariable("specificationID") String specificationID,
								@PathVariable("specversion") String specversion,
								@PathVariable("uri") String uri,
								@PathVariable("taskId") String taskId,
								@RequestParam("maxTaskAge") Integer maxTaskAge) {
		extensionTaskDao.setMaxTaskAge(specificationID, specversion, uri, taskId, maxTaskAge);
	}

	@RequestMapping(value="/api/specification/task/{uri}/{specificationID}/{specversion}/{taskId}/maxQueueAge",
			params = "maxQueueAge", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeMaxQueueAge(@PathVariable("specificationID") String specificationID,
								 @PathVariable("specversion") String specversion,
								 @PathVariable("uri") String uri,
								 @PathVariable("taskId") String taskId,
								@RequestParam("maxQueueAge") Integer maxQueueAge) {
		extensionTaskDao.setMaxQueueAge(specificationID, specversion, uri, taskId, maxQueueAge);
	}

	@RequestMapping(value="/api/specification/task/{uri}/{specificationID}/{specversion}/{taskId}/setAttributes",
			params = "maxQueueAge", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeMaxQueueAge(@PathVariable("specificationID") String specificationID,
								 @PathVariable("specversion") String specversion,
								 @PathVariable("uri") String uri,
								 @PathVariable("taskId") String taskId,
								 @RequestParam("costResourceHour") Integer costResourceHour,
								 @RequestParam("maxTaskAge") Integer maxTaskAge,
								 @RequestParam("maxQueueAge") Integer maxQueueAge) {
		extensionTaskDao.setAttributes(specificationID, specversion, uri, taskId, costResourceHour, maxTaskAge, maxQueueAge);
	}

}
