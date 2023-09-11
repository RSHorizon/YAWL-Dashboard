package org.yawlfoundation.yawldashboardbackend.dto;


import java.io.Serializable;
import java.util.*;

/**
 * @author Robin Steinwarz
 */
public class SpecificationStatisticDTO implements Serializable {
    private String id;
    private String version;
    private String uri;
    private String speckey;
    private List<TaskStatisticDTO> taskStatisticDTOS;
    private List<CaseStatisticDTO> caseStatisticDTOS;
    private Integer[] caseOccurrencesPerDayOfWeek;
    private List<AssocResources> eventAssocResources;
    private List<AssocResources> roleAssocResources;
    private int successfulCases = 0;
    private int unsuccessfulCases = 0;
    private double automationPercentage = 0;
    private long avgCaseQueueTime = 0;
    private long minCaseQueueTime = 0;
    private long maxCaseQueueTime = 0;

    private long avgCaseCompletionTime = 0;
    private long minCaseCompletionTime = 0;
    private long maxCaseCompletionTime = 0;

    private long avgCaseResourceTime = 0;
    private long minCaseResourceTime = 0;
    private long maxCaseResourceTime = 0;

    private long avgCaseLeadTime = 0;
    private long minCaseLeadTime = 0;
    private long maxCaseLeadTime = 0;

    private long avgWeeklyResourceTime = 0;
    private long minWeeklyResourceTime = 0;
    private long maxWeeklyResourceTime = 0;

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

    public long getAvgWeeklyResourceTime() {
        return avgWeeklyResourceTime;
    }

    public void setAvgWeeklyResourceTime(long avgWeeklyResourceTime) {
        this.avgWeeklyResourceTime = avgWeeklyResourceTime;
    }

    public List<AssocResources> getEventAssocResources() {
        return eventAssocResources;
    }

    public void setEventAssocResources(List<AssocResources> eventAssocResources) {
        this.eventAssocResources = eventAssocResources;
    }

    public List<AssocResources> getRoleAssocResources() {
        return roleAssocResources;
    }

    public void setRoleAssocResources(List<AssocResources> roleAssocResources) {
        this.roleAssocResources = roleAssocResources;
    }

    public double getAutomationPercentage() {
        return automationPercentage;
    }

    public void setAutomationPercentage(double automationPercentage) {
        this.automationPercentage = automationPercentage;
    }

    public long getAvgCaseQueueTime() {
        return avgCaseQueueTime;
    }

    public void setAvgCaseQueueTime(long avgCaseQueueTime) {
        this.avgCaseQueueTime = avgCaseQueueTime;
    }

    public long getMinCaseQueueTime() {
        return minCaseQueueTime;
    }

    public void setMinCaseQueueTime(long minCaseQueueTime) {
        this.minCaseQueueTime = minCaseQueueTime;
    }

    public long getMaxCaseQueueTime() {
        return maxCaseQueueTime;
    }

    public void setMaxCaseQueueTime(long maxCaseQueueTime) {
        this.maxCaseQueueTime = maxCaseQueueTime;
    }

    public long getMinCaseCompletionTime() {
        return minCaseCompletionTime;
    }

    public void setMinCaseCompletionTime(long minCaseCompletionTime) {
        this.minCaseCompletionTime = minCaseCompletionTime;
    }

    public long getMaxCaseCompletionTime() {
        return maxCaseCompletionTime;
    }

    public void setMaxCaseCompletionTime(long maxCaseCompletionTime) {
        this.maxCaseCompletionTime = maxCaseCompletionTime;
    }

    public long getAvgCaseResourceTime() {
        return avgCaseResourceTime;
    }

    public void setAvgCaseResourceTime(long avgCaseResourceTime) {
        this.avgCaseResourceTime = avgCaseResourceTime;
    }

    public long getMinCaseResourceTime() {
        return minCaseResourceTime;
    }

    public void setMinCaseResourceTime(long minCaseResourceTime) {
        this.minCaseResourceTime = minCaseResourceTime;
    }

    public long getMaxCaseResourceTime() {
        return maxCaseResourceTime;
    }

    public void setMaxCaseResourceTime(long maxCaseResourceTime) {
        this.maxCaseResourceTime = maxCaseResourceTime;
    }

    public long getAvgCaseLeadTime() {
        return avgCaseLeadTime;
    }

    public void setAvgCaseLeadTime(long avgCaseLeadTime) {
        this.avgCaseLeadTime = avgCaseLeadTime;
    }

    public long getMinCaseLeadTime() {
        return minCaseLeadTime;
    }

    public void setMinCaseLeadTime(long minCaseLeadTime) {
        this.minCaseLeadTime = minCaseLeadTime;
    }

    public long getMaxCaseLeadTime() {
        return maxCaseLeadTime;
    }

    public void setMaxCaseLeadTime(long maxCaseLeadTime) {
        this.maxCaseLeadTime = maxCaseLeadTime;
    }

    public long getMinWeeklyResourceTime() {
        return minWeeklyResourceTime;
    }

    public void setMinWeeklyResourceTime(long minWeeklyResourceTime) {
        this.minWeeklyResourceTime = minWeeklyResourceTime;
    }

    public long getMaxWeeklyResourceTime() {
        return maxWeeklyResourceTime;
    }

    public void setMaxWeeklyResourceTime(long maxWeeklyResourceTime) {
        this.maxWeeklyResourceTime = maxWeeklyResourceTime;
    }
}
