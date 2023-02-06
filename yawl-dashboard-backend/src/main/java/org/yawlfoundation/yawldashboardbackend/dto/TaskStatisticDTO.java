package org.yawlfoundation.yawldashboardbackend.dto;

import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Participant;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
/**
 * @author Robin Steinwarz
 */
public class TaskStatisticDTO implements Comparable<TaskStatisticDTO> {
    private String taskid;
    private Set<Participant> participants = new HashSet<>();
    private String decompositionOrder = "";
    private long avgCompletionTime = 0;
    private Integer[] avgOccurrencesPerWeek = {0,0,0,0,0,0,0,0};
    private long avgQueueTime = 0;
    private long avgTimeToReach = 0;

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

    public Set<Participant> getParticipants() {
        return participants;
    }

    public void setParticipants(Set<Participant> participants) {
        this.participants = participants;
    }

    @Override
    public int compareTo(TaskStatisticDTO taskStatisticDTO) {
        return decompositionOrderComparison(this.decompositionOrder, taskStatisticDTO.decompositionOrder);
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
}
