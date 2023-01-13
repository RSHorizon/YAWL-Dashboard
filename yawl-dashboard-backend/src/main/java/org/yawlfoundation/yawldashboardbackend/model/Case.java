package org.yawlfoundation.yawldashboardbackend.model;

import java.io.Serializable;

public class Case implements Serializable {
    String id;
    String jsonEvents;

    public Case(String id, String jsonEvents) {
        this.id = id;
        this.jsonEvents = jsonEvents;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJsonEvents() {
        return jsonEvents;
    }

    public void setJsonEvents(String jsonEvents) {
        this.jsonEvents = jsonEvents;
    }
}
