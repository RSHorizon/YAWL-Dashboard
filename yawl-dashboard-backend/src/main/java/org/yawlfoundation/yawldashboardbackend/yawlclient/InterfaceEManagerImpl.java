package org.yawlfoundation.yawldashboardbackend.yawlclient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.jdom2.JDOMException;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawl.engine.interfce.interfaceE.YLogGatewayClient;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceLogGatewayClient;
import org.yawlfoundation.yawldashboardbackend.session.interfaceE.InterfaceESessionHandle;
import org.yawlfoundation.yawldashboardbackend.session.interfaceE.InterfaceESessionPool;
import org.yawlfoundation.yawldashboardbackend.session.resourceservice.ResourceServiceSessionHandle;
import org.yawlfoundation.yawldashboardbackend.session.resourceservice.ResourceServiceSessionPool;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.CaseMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.FailureMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.SpecificationMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.SpecificationStatistic;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @author Robin Steinwarz
 */

public class InterfaceEManagerImpl implements InterfaceEManager {

    private final InterfaceESessionPool interfaceESessionPool;
    private final YLogGatewayClient connection;

    public InterfaceEManagerImpl(InterfaceESessionPool interfaceESessionPool, YLogGatewayClient connection) {
        this.interfaceESessionPool = interfaceESessionPool;
        this.connection = connection;
    }

    public String getSpecificationXESLog(YSpecificationID specID) {
        try (InterfaceESessionHandle handle = interfaceESessionPool.getHandle()) {
            String result = connection.getSpecificationXESLog(specID.getIdentifier(), specID.getVersionAsString(), specID.getUri(), handle.getRawHandle());
            return result;
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    public String getCompleteCaseLogsForSpecification(YSpecificationID specID) {
        try (InterfaceESessionHandle handle = interfaceESessionPool.getHandle()) {
            String result = connection.getCompleteCaseLogsForSpecification(specID.getIdentifier(), specID.getVersionAsString(), specID.getUri(), handle.getRawHandle());
            return result;
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    public List<Event> getCaseEvents(String caseID) {
        try (InterfaceESessionHandle handle = interfaceESessionPool.getHandle()) {
            String xml = connection.getCaseEvents(caseID, handle.getRawHandle());
            return CaseMarshaller.unmarshallCaseEventList(xml);
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    public String getCompleteCaseLog(String caseID) {
        try (InterfaceESessionHandle handle = interfaceESessionPool.getHandle()) {
            String result = connection.getCompleteCaseLog(caseID, handle.getRawHandle());
            return result;
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }


    public List<Specification> getAllSpecifications() {
        try (InterfaceESessionHandle handle = interfaceESessionPool.getHandle()) {
            String xml = connection.getAllSpecifications(handle.getRawHandle());
            return SpecificationMarshaller.unmarshallSpecificationsList(xml);
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    private String getJsonFromXML(String xml) {
        try {
            XmlMapper xmlMapper = new XmlMapper();
            JsonNode node = null;

            node = xmlMapper.readTree(xml.getBytes());

            ObjectMapper jsonMapper = new ObjectMapper();
            String json = jsonMapper.writeValueAsString(node);

            if (!connection.successful(xml)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(xml));
            } else {
                return json;
            }
        } catch (IOException | JDOMException e) {
            throw new RuntimeException(e);
        }
    }
}
