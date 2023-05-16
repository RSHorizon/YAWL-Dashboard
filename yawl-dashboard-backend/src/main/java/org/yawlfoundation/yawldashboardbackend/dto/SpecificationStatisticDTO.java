package org.yawlfoundation.yawldashboardbackend.dto;



import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Participant;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/**
 * @author Robin Steinwarz
 */
public class SpecificationStatisticDTO implements Serializable {
    String id;
    String version;
    String uri;
    String speckey;
    List<TaskStatisticDTO> taskStatisticDTOS;
    List<CaseStatisticDTO> caseStatisticDTOS;
    Set<Participant> participants = new HashSet<>();
    long avgCaseCompletionTime;
    int successfulCases;
    int unsuccessfulCases;
    double automationPercentage;
    Integer[] caseOccurrencesPerDayOfWeek;
    long avgResourceTimePerWeekSummed;

    public SpecificationStatisticDTO(String id, String version, String uri) {
        this.id = id;
        this.version = version;
        this.uri = uri;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getSpeckey() {
        return speckey;
    }

    public void setSpeckey(String speckey) {
        this.speckey = speckey;
    }

    public List<TaskStatisticDTO> getTaskStatisticDTOS() {
        return taskStatisticDTOS;
    }

    public void setTaskStatisticDTOS(List<TaskStatisticDTO> taskStatisticDTOS) {
        this.taskStatisticDTOS = taskStatisticDTOS;
    }

    public List<CaseStatisticDTO> getCaseStatisticDTOS() {
        return caseStatisticDTOS;
    }

    public void setCaseStatisticDTOS(List<CaseStatisticDTO> caseStatisticDTOS) {
        this.caseStatisticDTOS = caseStatisticDTOS;
    }

    public long getAvgCaseCompletionTime() {
        return avgCaseCompletionTime;
    }

    public void setAvgCaseCompletionTime(long avgCaseCompletionTime) {
        this.avgCaseCompletionTime = avgCaseCompletionTime;
    }

    public int getSuccessfulCases() {
        return successfulCases;
    }

    public void setSuccessfulCases(int successfulCases) {
        this.successfulCases = successfulCases;
    }

    public int getUnsuccessfulCases() {
        return unsuccessfulCases;
    }

    public void setUnsuccessfulCases(int unsuccessfulCases) {
        this.unsuccessfulCases = unsuccessfulCases;
    }

    public Integer[] getCaseOccurrencesPerDayOfWeek() {
        return caseOccurrencesPerDayOfWeek;
    }

    public void setCaseOccurrencesPerDayOfWeek(Integer[] caseOccurrencesPerDayOfWeek) {
        this.caseOccurrencesPerDayOfWeek = caseOccurrencesPerDayOfWeek;
    }

    public long getAvgResourceTimePerWeekSummed() {
        return avgResourceTimePerWeekSummed;
    }

    public void setAvgResourceTimePerWeekSummed(long avgResourceTimePerWeekSummed) {
        this.avgResourceTimePerWeekSummed = avgResourceTimePerWeekSummed;
    }

    public Set<Participant> getParticipants() {
        return participants;
    }

    public void setParticipants(Set<Participant> participants) {
        this.participants = participants;
    }


    public double getAutomationPercentage() {
        return automationPercentage;
    }

    public void setAutomationPercentage(double automationPercentage) {
        this.automationPercentage = automationPercentage;
    }

}
