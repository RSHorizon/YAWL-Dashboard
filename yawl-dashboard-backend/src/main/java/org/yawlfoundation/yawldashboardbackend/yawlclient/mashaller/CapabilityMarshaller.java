package org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller;

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Capability;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Role;

import java.io.IOException;
import java.io.StringReader;
import java.util.LinkedList;
import java.util.List;

/**
 * @author Robin Steinwarz
 */
public abstract class CapabilityMarshaller {

    public static List<Capability> parseCapabilities(String xml) throws IOException, JDOMException {
        List<Capability> result = new LinkedList<>();

        SAXBuilder builder = new SAXBuilder();
        Document document = (Document) builder.build(new StringReader(xml));
        Element root = document.getRootElement();
        for (Element item : root.getChildren()) {
            result.add(parseCapability(item));
        }

        return result;
    }

    public static Capability parseCapability(Element element) throws IOException {
        Capability capability = new Capability();
        capability.setId(element.getAttributeValue("id"));
        capability.setDescription(element.getChildText("description"));
        capability.setName(element.getChildText("name"));
        capability.setNotes(element.getChildText("notes"));
        return capability;
    }
}
