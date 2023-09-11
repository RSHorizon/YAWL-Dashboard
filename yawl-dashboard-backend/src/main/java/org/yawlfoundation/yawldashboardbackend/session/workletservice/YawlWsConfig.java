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
package org.yawlfoundation.yawldashboardbackend.session.workletservice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.yawlfoundation.yawl.engine.interfce.interfaceE.YLogGatewayClient;
import org.yawlfoundation.yawl.worklet.support.WorkletGatewayClient;
import org.yawlfoundation.yawldashboardbackend.yawlclient.InterfaceEManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WsManagerImpl;

/**
 * @author Robin Steinwarz
 */
@Configuration
public class YawlWsConfig {

    @Value("${yawl.ws.url}")
    private String wsUrl;

    @Value("${yawl.ws.username}")
    private String wsUsername;

    @Value("${yawl.ws.password}")
    private String wsPassword;

    @Value("${yawl.ws.gateway.path}")
    private String wsGatewayPath;


    @Bean
    public WorkletGatewayClient wsGatewayClient() {
        return new WorkletGatewayClient(createUrlForClient(wsUrl, wsGatewayPath));
    }

    @Bean
    public PermanentWsSessionPool permanentWsSessionPool() {
        return new PermanentWsSessionPool(wsGatewayClient(), wsUsername, wsPassword);
    }

    @Bean
    public WsManagerImpl wsManager() {
        return new WsManagerImpl(permanentWsSessionPool(), wsGatewayClient());
    }

    public static String createUrlForClient(String base, String path) {
        return (base.endsWith("/") ? base : base + "/") + path;
    }
}
