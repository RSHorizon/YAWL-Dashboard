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

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;


/**
 * FailureMarshaller.
 *
 * @author Philipp Thomas <philipp.thomas@floaz.de>
 */
public abstract class FailureMarshaller {

    public static String parseFailure(String xml) throws IOException, JDOMException {
        if (xml == null) {
            return "Response is null!";
        }

        SAXBuilder builder = new SAXBuilder();
        Document document = (Document) builder.build(new StringReader(xml));
        Element root = document.getRootElement();

        if (!root.getName().equals("failure")) {
            return xml;
        }

        Element reason = root.getChild("reason");
        if (reason != null) {
            return reason.getTextTrim();
        } else {
            return root.getTextTrim();
        }
    }

}
