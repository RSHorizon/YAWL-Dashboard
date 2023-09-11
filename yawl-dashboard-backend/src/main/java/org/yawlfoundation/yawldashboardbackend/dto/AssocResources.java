package org.yawlfoundation.yawldashboardbackend.dto;

import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Resource;

import java.util.HashSet;
import java.util.Set;

/**
 * @author Robin Steinwarz
 */
public class AssocResources {
    String association;
    Set<Resource> resources = new HashSet<>();

    AssocResources() {
    }

    public AssocResources(String event, Set<Resource> resources) {
        this.association = event;
        this.resources = resources;
    }

    public String getAssociation() {
        return association;
    }

    public void setAssociation(String association) {
        this.association = association;
    }

    public Set<Resource> getResources() {
        return resources;
    }

    public void setResources(Set<Resource> resources) {
        this.resources = resources;
    }
}
