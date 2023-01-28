/*
 * Copyright (c) 2004-2012 The YAWL Foundation. All rights reserved.
 * The YAWL Foundation is a collaboration of individuals and
 * organisations who are committed to improving workflow technology.
 *
 * This file is part of YAWL. YAWL is free software: you can
 * redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation.
 *
 * YAWL is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
 * Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with YAWL. If not, see <http://www.gnu.org/licenses/>.
 */
package org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller;

import java.io.IOException;
import java.io.StringReader;
import java.util.LinkedList;
import java.util.List;
import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;
import org.springframework.web.bind.annotation.PathVariable;
import org.yawlfoundation.yawl.elements.YSpecification;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawl.engine.interfce.SpecificationData;
import org.yawlfoundation.yawl.exceptions.YSyntaxException;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceMarshaller;
import org.yawlfoundation.yawl.unmarshal.YMarshal;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.SpecificationStatistic;


/**
 * ConsoleApplication.
 * @author Philipp Thomas <philipp.thomas@floaz.de>
 */
public abstract class SpecificationMarshaller {

	public static List<Specification> parseSepcifications(String xml) throws IOException, JDOMException {
		List<Specification> result = new LinkedList<>();

		SAXBuilder builder = new SAXBuilder();
		Document document = (Document) builder.build(new StringReader(xml));
		Element root = document.getRootElement();
		for(Element workItemElement : root.getChildren()) {
			result.add(parseSepcification(workItemElement));
		}

		return result;
	}


	public static SpecificationData parseSpecificationDefinition(String xml) throws IOException, JDOMException, YSyntaxException {
		ResourceMarshaller resourceMarshaller = new ResourceMarshaller();
		return resourceMarshaller.unmarshallSpecificationData(xml);
	}


	public static Specification parseSepcification(Element element) throws IOException {
		Specification specification = new Specification();
		specification.setId(element.getChildText("id"));
		specification.setUri(element.getChildText("uri"));
		specification.setVersion(element.getChildText("version"));
		specification.setSpecversion(element.getChildText("specversion"));
		specification.setDocumentation(element.getChildText("documentation"));
		specification.setMetatitle(element.getChildText("metaTitle"));
		if(element.getChild("authors") != null) {
			for(Element author : element.getChild("authors").getChildren()) {
				specification.getAuthors().add(author.getTextTrim());
			}
		}
		return specification;
	}

	public static List<Event> unmarshallEvents(String xml) throws JDOMException, IOException {
		List<Event> set = new LinkedList<>();

		SAXBuilder builder = new SAXBuilder();
		Document document = (Document) builder.build(new StringReader(xml));
		Element root = document.getRootElement();
		for(Element eventElement : root.getChildren()) {
			set.add(unmarshallEvent(eventElement));
		}

		return set;
	}

	public static YSpecificationID unmarshallYSpecificationID(String xml) {
		SAXBuilder builder = new SAXBuilder();
		Document document = null;
		try {
			document = (Document) builder.build(new StringReader(xml));
		} catch (JDOMException | IOException e) {
			throw new RuntimeException(e);
		}
		Element element = document.getRootElement();

		if (element == null) return null;

		String specificationID = "";
		String specversion = "";
		String uri = "";

		for(Element child : element.getChildren()){
			if(child.getName().equals("identifier")){
				specificationID = child.getValue();
			}else if(child.getName().equals("version")){
				specversion = child.getValue();
			}else if(child.getName().equals("uri")){
				uri = child.getValue();
			}
		}
		return new YSpecificationID(specificationID, specversion, uri);
	}

	public static Event unmarshallEvent(Element eventElement) {
		if (eventElement == null) return null;

		String speckey = eventElement.getChildText("speckey");
		String caseid = eventElement.getChildText("caseid");
		String taskid = eventElement.getChildText("taskid");
		String itemid = eventElement.getChildText("itemid");
		String resourceid = eventElement.getChildText("resourceid");
		String eventtype = eventElement.getChildText("eventtype");
		String timestamp = eventElement.getChildText("timestamp");
		String _key = eventElement.getAttribute("key").getValue();

		Event event = new Event(speckey, caseid, taskid, itemid, resourceid, eventtype, timestamp, _key);

		return event;
	}

	public static SpecificationStatistic unmarshallSpecificationStatistic(String xml) {
		SAXBuilder builder = new SAXBuilder();
		Document document = null;
		try {
			document = (Document) builder.build(new StringReader(xml));
		} catch (JDOMException | IOException e) {
			throw new RuntimeException(e);
		}
		Element element = document.getRootElement();

		if (element == null) return null;

		SpecificationStatistic specificationStatistic = new SpecificationStatistic(element.getAttribute("id").getValue(), element.getAttribute("key").getValue());
		specificationStatistic.setStarted(Integer.parseInt(element.getChildText("started")));
		specificationStatistic.setCompleted(Integer.parseInt(element.getChildText("completed")));
		specificationStatistic.setCancelled(Integer.parseInt(element.getChildText("cancelled")));
		specificationStatistic.setCompletionMaxtime(element.getChildText("completionMaxtime"));
		specificationStatistic.setCompletionMintime(element.getChildText("completionMintime"));
		specificationStatistic.setCompletionAvgtime(element.getChildText("completionAvgtime"));
		specificationStatistic.setCancelledMaxtime(element.getChildText("cancelledMaxtime"));
		specificationStatistic.setCancelledMintime(element.getChildText("cancelledMintime"));
		specificationStatistic.setCancelledAvgtime(element.getChildText("cancelledAvgtime"));

		return specificationStatistic;
	}

}
