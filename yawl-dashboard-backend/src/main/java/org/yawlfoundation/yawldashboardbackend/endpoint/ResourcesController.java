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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceManager;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManager;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Resource;

import java.util.List;


/**
 * ResourcesController.
 * @author Philipp R. Thomas <philipp.thomas@floaz.de>
 */
@RestController
@Secured("ROLE_ADMIN")
class ResourcesController {

	@Autowired
	private WorkItemManager workItemManager;

	@Autowired
	private ResourceManager resourceManager;


	@RequestMapping(value="/api/resources", method=RequestMethod.GET)
	public List<Resource> getAllResources() {
		return resourceManager.getResources();
	}

	@RequestMapping(value="/api/constraints", method=RequestMethod.GET)
	public List<Resource> getAllConstraints() {
		return resourceManager.getResources();
	}

}
