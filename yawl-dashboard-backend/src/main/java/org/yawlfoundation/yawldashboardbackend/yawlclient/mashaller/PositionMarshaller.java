package org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller;

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;
import org.yawlfoundation.yawl.resourcing.resource.Capability;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Position;

import java.io.IOException;
import java.io.StringReader;
import java.util.LinkedList;
import java.util.List;

public abstract class PositionMarshaller {

    public static List<Position> parsePositions(String xml) throws IOException, JDOMException {
        List<Position> result = new LinkedList<>();

        SAXBuilder builder = new SAXBuilder();
        Document document = (Document) builder.build(new StringReader(xml));
        Element root = document.getRootElement();
        for(Element item : root.getChildren()) {
            result.add(parsePosition(item));
        }

        return result;
    }

    public static Position parsePosition(Element element) throws IOException {
        Position position = new Position();
        position.setId(element.getAttributeValue("id"));
        position.setTitle(element.getChildText("title"));
        position.setDescription(element.getChildText("description"));
        position.setPositionid(element.getChildText("positionid"));
        position.setNotes(element.getChildText("notes"));
        return position;
    }
}
