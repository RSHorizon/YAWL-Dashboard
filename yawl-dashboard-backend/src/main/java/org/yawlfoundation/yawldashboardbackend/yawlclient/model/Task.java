package org.yawlfoundation.yawldashboardbackend.yawlclient.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * The dto for specification.
 * @author Philipp Thomas
 * @editedBy Robin Steinwarz
 */

public class Task {
    String id;
    String name;
    String order;
    String specificationId;
    String specversion;
    String uri;
    Set<String> demandedCapabilities = new HashSet<>();
    Set<String> demandedRoles = new HashSet<>();
    Set<String> demandedPositions = new HashSet<>();
    boolean autoOffer = false;
    boolean autoAllocate = false;
    boolean autoStart = false;

    public Task(String id, String specificationId, String specversion, String uri) {
        this.id = id;
        this.specificationId = specificationId;
        this.specversion = specversion;
        this.uri = uri;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSpecificationId() {
        return specificationId;
    }

    public void setSpecificationId(String specificationId) {
        this.specificationId = specificationId;
    }

    public String getSpecversion() {
        return specversion;
    }

    public void setSpecversion(String specversion) {
        this.specversion = specversion;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }


    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public Set<String> getDemandedCapabilities() {
        return demandedCapabilities;
    }

    public void setDemandedCapabilities(Set<String> demandedCapabilities) {
        this.demandedCapabilities = demandedCapabilities;
    }

    public Set<String> getDemandedRoles() {
        return demandedRoles;
    }

    public void setDemandedRoles(Set<String> demandedRoles) {
        this.demandedRoles = demandedRoles;
    }

    public Set<String> getDemandedPositions() {
        return demandedPositions;
    }

    public void setDemandedPositions(Set<String> demandedPositions) {
        this.demandedPositions = demandedPositions;
    }

    public boolean isAutoOffer() {
        return autoOffer;
    }

    public void setAutoOffer(boolean autoOffer) {
        this.autoOffer = autoOffer;
    }

    public boolean isAutoAllocate() {
        return autoAllocate;
    }

    public void setAutoAllocate(boolean autoAllocate) {
        this.autoAllocate = autoAllocate;
    }

    public boolean isAutoStart() {
        return autoStart;
    }

    public void setAutoStart(boolean autoStart) {
        this.autoStart = autoStart;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
