package org.yawlfoundation.yawldashboardbackend.dto;

import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Capability;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Participant;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Position;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Role;

import java.io.Serializable;
import java.util.*;

/**
 * @author Robin Steinwarz
 */
public class TaskStatisticDTO implements Comparable<TaskStatisticDTO>, Serializable {
    private String taskid;
    // <Participant_ID, Set<Event>>
    private Map<String, Set<String>> participants = new HashMap<>();
    // <Capability_name, occurrences>
    private Map<String, Integer> associatedCapabilities = new HashMap<>();
    // <Role_name, occurrences>
    private Map<String, Integer> associatedRoles = new HashMap<>();
    // <Position_name, occurrences>
    private Map<String, Integer> associatedPosition = new HashMap<>();
    private String decompositionOrder = "";
    private long avgCompletionTime = 0;
    private Integer[] avgOccurrencesPerWeek = {0,0,0,0,0,0,0,0};
    private long avgQueueTime = 0;
    private boolean automated = false;
    private long avgTimeToReach = 0;
    private double costResourceHour;
    private long maxQueueAge;
    private long maxTaskAge;
    Set<Capability> demandedCapabilities = new HashSet<>();
    Set<Role> demandedRoles = new HashSet<>();
    Set<Position> demandedPosition = new HashSet<>();
    boolean autoOffer = false;
    boolean autoAllocate = false;
    boolean autoStart = false;

    public TaskStatisticDTO(String taskid) {
        this.taskid = taskid;
    }

    public String getTaskid() {
        return taskid;
    }

    public void setTaskid(String taskid) {
        this.taskid = taskid;
    }

    public String getDecompositionOrder() {
        return decompositionOrder;
    }

    public void setDecompositionOrder(String decompositionOrder) {
        this.decompositionOrder = decompositionOrder;
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
        return decompositionOrderComparison(this.decompositionOrder, taskStatisticDTO.decompositionOrder);
    }

    public Map<String, Integer> getAssociatedCapabilities() {
        return associatedCapabilities;
    }

    public void setAssociatedCapabilities(Map<String, Integer> associatedCapabilities) {
        this.associatedCapabilities = associatedCapabilities;
    }

    public Map<String, Integer> getAssociatedRoles() {
        return associatedRoles;
    }

    public void setAssociatedRoles(Map<String, Integer> associatedRoles) {
        this.associatedRoles = associatedRoles;
    }

    public Map<String, Integer> getAssociatedPosition() {
        return associatedPosition;
    }

    public void setAssociatedPosition(Map<String, Integer> associatedPosition) {
        this.associatedPosition = associatedPosition;
    }

    public static int decompositionOrderComparison(String order, String order2) {
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

    public Map<String, Set<String>> getParticipants() {
        return participants;
    }

    public void setParticipants(Map<String, Set<String>> participants) {
        this.participants = participants;
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

    public Set<Position> getDemandedPosition() {
        return demandedPosition;
    }

    public void setDemandedPosition(Set<Position> demandedPosition) {
        this.demandedPosition = demandedPosition;
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
}
