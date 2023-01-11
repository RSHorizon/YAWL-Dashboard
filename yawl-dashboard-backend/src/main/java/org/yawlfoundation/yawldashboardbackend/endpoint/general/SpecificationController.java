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
package org.yawlfoundation.yawldashboardbackend.endpoint.general;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.dao.ExtensionSpecificationDao;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionSpecification;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManager;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
@Secured("ROLE_ADMIN")
class SpecificationController {

	@Autowired
	private WorkItemManager workItemManager;

	@Autowired
	ExtensionSpecificationDao extensionSpecificationDao;

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
			ExtensionSpecification newExtensionSpecification = new ExtensionSpecification();
			newExtensionSpecification.setSpecificationId(specificationID);
			newExtensionSpecification.setSpecversion(specversion);
			newExtensionSpecification.setUri(uri);
			newExtensionSpecification.setCore(false);
			newExtensionSpecification.setSpecificationTimeLimit(0);
			newExtensionSpecification.setMaxTaskAge(0);
			newExtensionSpecification.setMaxQueueAge(0);
			newExtensionSpecification.setCostResourceHour(0);
			extensionSpecificationDao.save(newExtensionSpecification);
			return newExtensionSpecification;
		}else{
			return extensionSpecification;
		}
	}

	@RequestMapping(value="/api/specification/extension/{uri}/{specificationID}/{specversion}/core",
			params = "core", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeSpecificationTimeLimit(@PathVariable("specificationID") String specificationID,
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

	@RequestMapping(value="/api/specification/extension/{uri}/{specificationID}/{specversion}/costResourceHour",
			params = "costResourceHour", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeCostResourceHour(@PathVariable("specificationID") String specificationID,
									  @PathVariable("specversion") String specversion,
									  @PathVariable("uri") String uri,
									  @RequestParam("costResourceHour") Integer costResourceHour) {
		extensionSpecificationDao.setCostResourceHour(specificationID, specversion, uri, costResourceHour);
	}

	@RequestMapping(value="/api/specification/extension/{uri}/{specificationID}/{specversion}/maxTaskAge",
			params = "maxTaskAge", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeMaxTaskAge(@PathVariable("specificationID") String specificationID,
								@PathVariable("specversion") String specversion,
								@PathVariable("uri") String uri,
								@RequestParam("maxTaskAge") Integer maxTaskAge) {
		extensionSpecificationDao.setMaxTaskAge(specificationID, specversion, uri, maxTaskAge);
	}

	@RequestMapping(value="/api/specification/extension/{uri}/{specificationID}/{specversion}/maxQueueAge",
			params = "maxQueueAge", method= RequestMethod.POST)
	@ResponseBody
	@Transactional
	public void storeMaxQueueAge(@PathVariable("specificationID") String specificationID,
								 @PathVariable("specversion") String specversion,
								 @PathVariable("uri") String uri,
								@RequestParam("maxQueueAge") Integer maxQueueAge) {
		extensionSpecificationDao.setMaxQueueAge(specificationID, specversion, uri, maxQueueAge);
	}

}
