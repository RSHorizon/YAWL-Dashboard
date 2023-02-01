package org.yawlfoundation.yawldashboardbackend.dto;

import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
/**
 * @author Robin Steinwarz
 */
public class CaseDTO implements Serializable {
    private String id;
    private List<Event> taskEvents = new ArrayList<>();
    private List<Event> caseEvents = new ArrayList<>();

    public CaseDTO(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Event> getTaskEvents() {
        return taskEvents;
    }

    public void setTaskEvents(List<Event> taskEvents) {
        this.taskEvents = taskEvents;
    }

    public List<Event> getCaseEvents() {
        return caseEvents;
    }

    public void setCaseEvents(List<Event> caseEvents) {
        this.caseEvents = caseEvents;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }

        if (obj.getClass() != this.getClass()) {
            return false;
        }

        final CaseDTO other = (CaseDTO) obj;
        if (((this.id == null) || (other.id != null)) && !this.id.equals(other.id)) {
            return false;
        }

        return true;
    }
}
