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
package org.yawlfoundation.yawldashboardbackend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceLogGatewayClient;
import org.yawlfoundation.yawldashboardbackend.yawlclient.PermanentResourceServiceSessionPool;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceLogManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManagerImpl;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceGatewayClient;
import org.yawlfoundation.yawl.resourcing.rsInterface.WorkQueueGatewayClient;



/**
 * The security configuration.
 * @author Philipp R. Thomas <philipp.thomas@floaz.de>
 * @editedBy Robin Steinwarz
 */
@Configuration
class YawlClientConfig {

	@Value("${yawl.resourceservice.url}")
	private String		resourceServiceUrl;

	@Value("${yawl.resourceservice.username}")
	private String		resourceServiceUsername;

	@Value("${yawl.resourceservice.password}")
	private String		resourceServicePassword;

	@Value("${yawl.resource.gateway.path}")
	private String		resourceGatewayPath;

	@Value("${yawl.log.gateway.path}")
	private String		resourceLogGatewayPath;

	@Value("${yawl.workqueue.gateway.path}")
	private String		workQueueGatewayPath;



	@Bean
	protected ResourceGatewayClient resourceGatewayClient() {
		return new ResourceGatewayClient(createUrlForClient(resourceServiceUrl, resourceGatewayPath));
	}

	@Bean
	protected ResourceLogGatewayClient resourceLogGatewayClient() {
		return new ResourceLogGatewayClient(createUrlForClient(resourceServiceUrl, resourceLogGatewayPath));
	}

	@Bean
	protected WorkQueueGatewayClient workQueueGatewayClient() {
		return new WorkQueueGatewayClient(createUrlForClient(resourceServiceUrl, workQueueGatewayPath));
	}

	protected static String createUrlForClient(String base, String path) {
		return (base.endsWith("/") ? base : base + "/") + path;
	}


	@Bean
	protected PermanentResourceServiceSessionPool permanentResourceServiceSessionPool() {
		return new PermanentResourceServiceSessionPool(resourceGatewayClient(), resourceServiceUsername, resourceServicePassword);
	}


	@Bean
	protected ResourceManagerImpl resourceManager() {
		return new ResourceManagerImpl(permanentResourceServiceSessionPool(), resourceGatewayClient());
	}

	@Bean
	protected ResourceLogManagerImpl resourceLogManager() {
		return new ResourceLogManagerImpl(permanentResourceServiceSessionPool(), resourceLogGatewayClient());
	}

	@Bean
	protected WorkItemManagerImpl workItemManager() {
		return new WorkItemManagerImpl(permanentResourceServiceSessionPool(), workQueueGatewayClient(), resourceManager());
	}

}
