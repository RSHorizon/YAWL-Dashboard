package org.yawlfoundation.yawldashboardbackend.dto;

import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Participant;

import java.util.HashSet;
import java.util.Set;

public class AssociatedParticipants {
    String association;
    Set<Participant> participants = new HashSet<>();

    AssociatedParticipants(){}

    public AssociatedParticipants(String event, Set<Participant> participants){
        this.association = event;
        this.participants = participants;
    }

    public String getAssociation() {
        return association;
    }

    public void setAssociation(String association) {
        this.association = association;
    }

    public Set<Participant> getParticipants() {
        return participants;
    }

    public void setParticipants(Set<Participant> participants) {
        this.participants = participants;
    }
}
