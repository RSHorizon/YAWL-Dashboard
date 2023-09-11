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

import org.springframework.scheduling.annotation.Scheduled;
import org.yawlfoundation.yawl.engine.interfce.interfaceE.YLogGatewayClient;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.IOException;
import java.net.ConnectException;

/**
 * @author Robin Steinwarz
 */
public class PermanentInterfaceESessionPool implements InterfaceESessionPool {

    private final YLogGatewayClient connection;
    private final String username;
    private final String password;

    private String handle = null;


    public PermanentInterfaceESessionPool(YLogGatewayClient connection, String username, String password) {
        this.connection = connection;
        this.username = username;
        this.password = password;
    }


    @PostConstruct
    public synchronized void init() {
        try {
            connect();
        } catch (Exception e) {
            System.out.println("Could not connect to YAWL-Resource-Service.");
        }
    }


    public synchronized void connect() throws IOException {
        if (isConnected()) {
            disconnect();
        }

        try {
            handle = connection.connect(username, password);
            if (!connection.successful(handle)) {
                handle = null;
                throw new RuntimeException("Could not connect to the YAWL interface E!");
            }
        } catch (ConnectException exception) {
            System.out.println("Could not connect to the YAWL interface E!");
        }
    }


    @PreDestroy
    public synchronized void disconnect() throws IOException {
		/*if(handle == null || connection == null) {
			return;
		}

		try {
			connection.disconnect(handle);
		}catch(ConnectException e) {
			System.out.println("Could not disconnect from the YAWL-Resource-Service.");
		}
		finally {
			handle = null;
		}*/

        handle = null;
    }


    @Scheduled(fixedRate = 5000)
    public synchronized void refreshSessionHandle() throws IOException {
        try {
            String result = connection.checkConnection(handle);
            if (!connection.successful(result)) {
                reconnect();
            }
        } catch (ConnectException exception) {
            System.out.println("Could not connect to the YAWL interface E!");
        }
    }


    @Scheduled(fixedRate = 10000)
    public synchronized void reconnect() throws IOException {
        disconnect();
        connect();
    }


    public synchronized boolean isConnected() {
        return handle != null;
    }


    public synchronized void checkConnected() {
        if (!isConnected()) {
            throw new RuntimeException("No session handle available!");
        }
    }


    @Override
    public synchronized InterfaceESessionHandle getHandle() {
        if (!isConnected()) {
            try {
                connect();
            } catch (Exception e) {
                throw new RuntimeException("No session handle available!");
            }
        }
        return new SimpleInterfaceESessionHandle(handle);
    }

}
