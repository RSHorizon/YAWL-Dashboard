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
import java.net.ConnectException;
import java.util.List;

import org.jdom2.JDOMException;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceGatewayClient;
import org.yawlfoundation.yawldashboardbackend.session.resourceservice.ResourceServiceSessionHandle;
import org.yawlfoundation.yawldashboardbackend.session.resourceservice.ResourceServiceSessionPool;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.CapabilityMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.ResourceMarshaller;
import org.yawlfoundation.yawl.util.PasswordEncryptor;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.PositionMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.RoleMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Capability;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Resource;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Position;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Role;

/**
 * CreateUserScript.
 *
 * @author Philipp Thomas <philipp.thomas@floaz.de>
 * @editedBy Robin Steinwarz
 */
public class ResourceManagerImpl implements ResourceManager {

    private final ResourceServiceSessionPool resourceManagerSessionPool;
    private final ResourceGatewayClient connection;


    public ResourceManagerImpl(ResourceServiceSessionPool resourceManagerSessionPool, ResourceGatewayClient connection) {
        this.resourceManagerSessionPool = resourceManagerSessionPool;
        this.connection = connection;
    }


    @Override
    public boolean checkCredentials(String username, String password) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.validateUserCredentials(username, PasswordEncryptor.encrypt(password, password), false, handle.getRawHandle());
            return connection.successful(result);
        } catch (ConnectException e) {
            System.out.println("Login not possible, because the connection to the resource service is unavailable.");
            return false;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Resource> getResources() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getParticipants(handle.getRawHandle());

            return ResourceMarshaller.parseResources(result);
        } catch (IOException | JDOMException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String getConstraints() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getConstraints(handle.getRawHandle());
            return result;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String getFilters() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getFilters(handle.getRawHandle());
            return result;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String getAllSelectors() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getFilters(handle.getRawHandle());
            return result;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String getAllocators() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getFilters(handle.getRawHandle());
            return result;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Resource getResourceByName(String name) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getParticipantFromUserID(name, handle.getRawHandle());

            if (!connection.successful(result)) {
                return null;
            } else {
                return ResourceMarshaller.parseResource(result);
            }
        } catch (IOException | JDOMException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Role> getRoles() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getRoles(handle.getRawHandle());
            return RoleMarshaller.parseRoles(result);
        } catch (IOException | JDOMException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Capability> getCapabilities() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getCapabilities(handle.getRawHandle());
            return CapabilityMarshaller.parseCapabilities(result);
        } catch (IOException | JDOMException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Position> getPositions() {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getPositions(handle.getRawHandle());
            return PositionMarshaller.parsePositions(result);
        } catch (IOException | JDOMException e) {
            throw new RuntimeException(e);
        }
    }

}
