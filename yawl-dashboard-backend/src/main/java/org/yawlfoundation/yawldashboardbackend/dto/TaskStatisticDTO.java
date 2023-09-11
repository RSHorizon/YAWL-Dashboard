package org.yawlfoundation.yawldashboardbackend.dto;

import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Capability;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Position;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Role;

import java.io.Serializable;
import java.util.*;

/**
 * @author Robin Steinwarz
 */
public class TaskStatisticDTO implements Comparable<TaskStatisticDTO>, Serializable {
    private String taskid = "";
    private String name = "";
    private String order = "";
    private String minimalOrder = "";
    private boolean automated = false;
    private Integer[] avgOccurrencesPerWeek = {0, 0, 0, 0, 0, 0, 0, 0};

    // <Resource_ID, Set<Event>>
    private Map<String, Set<String>> resources = new HashMap<>();
    // <Capability_name, occurrences>
    private Map<String, Integer> assocCapabilities = new HashMap<>();
    // <Role_name, occurrences>
    private Map<String, Integer> assocRoles = new HashMap<>();
    // <Position_name, occurrences>
    private Map<String, Integer> assocPositions = new HashMap<>();

    private Map<String, Long> assocCapabilityTime = new HashMap<>();
    // <Role_name, occurrences>
    private Map<String, Long> assocRoleTime = new HashMap<>();
    // <Position_name, occurrences>
    private Map<String, Long> assocPositionTime = new HashMap<>();
    private Set<Capability> demandedCapabilities = new HashSet<>();
    private Set<Role> demandedRoles = new HashSet<>();
    private Set<Position> demandedPositions = new HashSet<>();
    private long avgQueueTime = 0;
    private long minQueueTime = 0;
    private long maxQueueTime = 0;
    private long avgCompletionTime = 0;
    private long minCompletionTime = 0;
    private long maxCompletionTime = 0;
    private long avgResourceTime = 0;
    private long minResourceTime = 0;
    private long maxResourceTime = 0;
    private long avgLeadTime = 0;
    private long minLeadTime = 0;
    private long maxLeadTime = 0;
    private double avgInstancesPerCase = 0;
    private double minInstancesPerCase = 0;
    private double maxInstancesPerCase = 0;
    private long avgTimeToReach = 0;
    private long minTimeToReach = 0;
    private long maxTimeToReach = 0;
    private double costResourceHour = 0;
    private long maxQueueAge = 0;
    private long maxTaskAge = 0;
    private boolean autoOffer = false;
    private boolean autoAllocate = false;
    private boolean autoStart = false;

    public TaskStatisticDTO(String taskid) {
        this.taskid = taskid;
    }

    public String getTaskid() {
        return taskid;
    }

    public void setTaskid(String taskid) {
        this.taskid = taskid;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public long getAvgCompletionTime() {
        return avgCompletionTime;
    }

    public void setAvgCompletionTime(long avgCompletionTime) {
        this.avgCompletionTime = avgCompletionTime;
    }

    public Integer[] getAvgOccurrencesPerWeek() {
        return avgOccurrencesPerWeek;
    }

    public void setAvgOccurrencesPerWeek(Integer[] avgOccurrencesPerWeek) {
        this.avgOccurrencesPerWeek = avgOccurrencesPerWeek;
    }

    public long getAvgQueueTime() {
        return avgQueueTime;
    }

    public void setAvgQueueTime(long avgQueueTime) {
        this.avgQueueTime = avgQueueTime;
    }

    public long getAvgTimeToReach() {
        return avgTimeToReach;
    }

    public void setAvgTimeToReach(long avgTimeToReach) {
        this.avgTimeToReach = avgTimeToReach;
    }

    @Override
    public int compareTo(TaskStatisticDTO taskStatisticDTO) {
        return orderComparison(this.order, taskStatisticDTO.order);
    }

    public Map<String, Integer> getAssocCapabilities() {
        return assocCapabilities;
    }

    public void setAssocCapabilities(Map<String, Integer> assocCapabilities) {
        this.assocCapabilities = assocCapabilities;
    }

    public Map<String, Integer> getAssocRoles() {
        return assocRoles;
    }

    public void setAssocRoles(Map<String, Integer> assocRoles) {
        this.assocRoles = assocRoles;
    }

    public Map<String, Integer> getAssocPositions() {
        return assocPositions;
    }

    public void setAssocPositions(Map<String, Integer> assocPositions) {
        this.assocPositions = assocPositions;
    }

    public static int orderComparison(String order, String order2) {
        if (order == null || order2 == null || order.equals("") || order2.equals("")) {
            return 0;
        }
        String[] orderElements = order.split("\\.");
        String[] order2Elements = order2.split("\\.");

        // select smallest array
        int limiter = orderElements.length;
        if (limiter > order2Elements.length) {
            limiter = order2Elements.length;
        }

        // compare progress on individual levels
        for (int i = 0; i < limiter; i++) {
            if (Integer.parseInt(orderElements[i]) < Integer.parseInt(order2Elements[i])) {
                return -1;
            } else if (Integer.parseInt(orderElements[i]) > Integer.parseInt(order2Elements[i])) {
                return 1;
            }
        }

        if (orderElements.length > order2Elements.length) {
            return 1;
        } else if (orderElements.length < order2Elements.length) {
            return -1;
        }

        return 0;
    }

    public Map<String, Set<String>> getResources() {
        return resources;
    }

    public void setResources(Map<String, Set<String>> resources) {
        this.resources = resources;
    }

    public boolean isAutomated() {
        return automated;
    }

    public void setAutomated(boolean automated) {
        this.automated = automated;
    }

    public Set<Capability> getDemandedCapabilities() {
        return demandedCapabilities;
    }

    public void setDemandedCapabilities(Set<Capability> demandedCapabilities) {
        this.demandedCapabilities = demandedCapabilities;
    }

    public Set<Role> getDemandedRoles() {
        return demandedRoles;
    }

    public void setDemandedRoles(Set<Role> demandedRoles) {
        this.demandedRoles = demandedRoles;
    }

    public Set<Position> getDemandedPositions() {
        return demandedPositions;
    }

    public void setDemandedPositions(Set<Position> demandedPositions) {
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

    public double getCostResourceHour() {
        return costResourceHour;
    }

    public void setCostResourceHour(double costResourceHour) {
        this.costResourceHour = costResourceHour;
    }

    public long getMaxQueueAge() {
        return maxQueueAge;
    }

    public void setMaxQueueAge(long maxQueueAge) {
        this.maxQueueAge = maxQueueAge;
    }

    public long getMaxTaskAge() {
        return maxTaskAge;
    }

    public void setMaxTaskAge(long maxTaskAge) {
        this.maxTaskAge = maxTaskAge;
    }

    public String getMinimalOrder() {
        return minimalOrder;
    }

    public void setMinimalOrder(String minimalOrder) {
        this.minimalOrder = minimalOrder;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Map<String, Long> getAssocCapabilityTime() {
        return assocCapabilityTime;
    }

    public void setAssocCapabilityTime(Map<String, Long> assocCapabilityTime) {
        this.assocCapabilityTime = assocCapabilityTime;
    }

    public Map<String, Long> getAssocRoleTime() {
        return assocRoleTime;
    }

    public void setAssocRoleTime(Map<String, Long> assocRoleTime) {
        this.assocRoleTime = assocRoleTime;
    }

    public Map<String, Long> getAssocPositionTime() {
        return assocPositionTime;
    }

    public void setAssocPositionTime(Map<String, Long> assocPositionTime) {
        this.assocPositionTime = assocPositionTime;
    }

    public long getAvgResourceTime() {
        return avgResourceTime;
    }

    public void setAvgResourceTime(long avgResourceTime) {
        this.avgResourceTime = avgResourceTime;
    }

    public double getAvgInstancesPerCase() {
        return avgInstancesPerCase;
    }

    public void setAvgInstancesPerCase(double avgInstancesPerCase) {
        this.avgInstancesPerCase = avgInstancesPerCase;
    }

    public long getMinQueueTime() {
        return minQueueTime;
    }

    public void setMinQueueTime(long minQueueTime) {
        this.minQueueTime = minQueueTime;
    }

    public long getMaxQueueTime() {
        return maxQueueTime;
    }

    public void setMaxQueueTime(long maxQueueTime) {
        this.maxQueueTime = maxQueueTime;
    }

    public long getMinCompletionTime() {
        return minCompletionTime;
    }

    public void setMinCompletionTime(long minCompletionTime) {
        this.minCompletionTime = minCompletionTime;
    }

    public long getMaxCompletionTime() {
        return maxCompletionTime;
    }

    public void setMaxCompletionTime(long maxCompletionTime) {
        this.maxCompletionTime = maxCompletionTime;
    }

    public long getMinResourceTime() {
        return minResourceTime;
    }

    public void setMinResourceTime(long minResourceTime) {
        this.minResourceTime = minResourceTime;
    }

    public long getMaxResourceTime() {
        return maxResourceTime;
    }

    public void setMaxResourceTime(long maxResourceTime) {
        this.maxResourceTime = maxResourceTime;
    }

    public long getAvgLeadTime() {
        return avgLeadTime;
    }

    public void setAvgLeadTime(long avgLeadTime) {
        this.avgLeadTime = avgLeadTime;
    }

    public long getMinLeadTime() {
        return minLeadTime;
    }

    public void setMinLeadTime(long minLeadTime) {
        this.minLeadTime = minLeadTime;
    }

    public long getMaxLeadTime() {
        return maxLeadTime;
    }

    public void setMaxLeadTime(long maxLeadTime) {
        this.maxLeadTime = maxLeadTime;
    }

    public double getMinInstancesPerCase() {
        return minInstancesPerCase;
    }

    public void setMinInstancesPerCase(double minInstancesPerCase) {
        this.minInstancesPerCase = minInstancesPerCase;
    }

    public double getMaxInstancesPerCase() {
        return maxInstancesPerCase;
    }

    public void setMaxInstancesPerCase(double maxInstancesPerCase) {
        this.maxInstancesPerCase = maxInstancesPerCase;
    }

    public long getMinTimeToReach() {
        return minTimeToReach;
    }

    public void setMinTimeToReach(long minTimeToReach) {
        this.minTimeToReach = minTimeToReach;
    }

    public long getMaxTimeToReach() {
        return maxTimeToReach;
    }

    public void setMaxTimeToReach(long maxTimeToReach) {
        this.maxTimeToReach = maxTimeToReach;
    }
}
