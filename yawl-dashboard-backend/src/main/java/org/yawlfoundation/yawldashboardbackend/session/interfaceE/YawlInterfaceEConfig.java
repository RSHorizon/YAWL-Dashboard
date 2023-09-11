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
package org.yawlfoundation.yawldashboardbackend.session.interfaceE;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.yawlfoundation.yawl.engine.interfce.interfaceE.YLogGatewayClient;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceGatewayClient;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceLogGatewayClient;
import org.yawlfoundation.yawl.resourcing.rsInterface.WorkQueueGatewayClient;
import org.yawlfoundation.yawldashboardbackend.session.resourceservice.PermanentResourceServiceSessionPool;
import org.yawlfoundation.yawldashboardbackend.yawlclient.InterfaceEManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceLogManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManagerImpl;

/**
 * @author Robin Steinwarz
 */
@Configuration
public class YawlInterfaceEConfig {

    @Value("${yawl.engine.url}")
    private String engineUrl;

    @Value("${yawl.engine.username}")
    private String engineUsername;

    @Value("${yawl.engine.password}")
    private String enginePassword;

    @Value("${yawl.interfaceE.gateway.path}")
    private String logGatewayPath;


    @Bean
    public YLogGatewayClient yLogGatewayClient() {
        return new YLogGatewayClient(createUrlForClient(engineUrl, logGatewayPath));
    }

    @Bean
    public PermanentInterfaceESessionPool permanentInterfaceESessionPool() {
        return new PermanentInterfaceESessionPool(yLogGatewayClient(), engineUsername, enginePassword);
    }

    @Bean
    public InterfaceEManagerImpl interfaceEManager() {
        return new InterfaceEManagerImpl(permanentInterfaceESessionPool(), yLogGatewayClient());
    }

    public static String createUrlForClient(String base, String path) {
        return (base.endsWith("/") ? base : base + "/") + path;
    }
}
