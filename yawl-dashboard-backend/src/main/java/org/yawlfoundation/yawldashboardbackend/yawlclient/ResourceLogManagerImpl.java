package org.yawlfoundation.yawldashboardbackend.yawlclient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.jdom2.JDOMException;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceLogGatewayClient;
import org.yawlfoundation.yawldashboardbackend.session.resourceservice.ResourceServiceSessionHandle;
import org.yawlfoundation.yawldashboardbackend.session.resourceservice.ResourceServiceSessionPool;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.FailureMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.SpecificationMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.SpecificationStatistic;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static org.apache.commons.lang3.time.DateUtils.parseDate;

/**
 * @author Robin Steinwarz
 */

public class ResourceLogManagerImpl implements ResourceLogManager {

    private final ResourceServiceSessionPool resourceManagerSessionPool;
    private final ResourceLogGatewayClient connection;

    public ResourceLogManagerImpl(ResourceServiceSessionPool resourceManagerSessionPool, ResourceLogGatewayClient connection) {
        this.resourceManagerSessionPool = resourceManagerSessionPool;
        this.connection = connection;
    }


    @Override
    public List<Event> getSpecificationEvents(YSpecificationID specID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getSpecificationEvents(specID.getIdentifier(), specID.getVersionAsString(), specID.getUri(), handle.getRawHandle());
            return SpecificationMarshaller.unmarshallEvents(result);
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public SpecificationStatistic getStatisticsForSpecification(YSpecificationID specID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            SimpleDateFormat parser=new SimpleDateFormat("yyyy-MM-dd");
            Date myDate = parser.parse("2000-01-01");
            String result = connection.getSpecificationStatistics(specID.getIdentifier(), specID.getVersionAsString(), specID.getUri(), myDate, new Date(), handle.getRawHandle());

            return SpecificationMarshaller.unmarshallSpecificationStatistic(result);
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String getTaskStatisticsForSpecification(YSpecificationID specID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getTaskStatisticsForSpecification(specID.getIdentifier(), specID.getVersionAsString(), specID.getUri(), handle.getRawHandle());

            return getJsonFromXML(result);
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public String getTaskStatisticsForCase(String caseId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getTaskStatisticsForCase(caseId, handle.getRawHandle());

            return getJsonFromXML(result);
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public List<Event> getCaseEvents(String caseId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getCaseEvents(caseId, handle.getRawHandle());

            return SpecificationMarshaller.unmarshallEvents(result);
        } catch (IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public YSpecificationID getSpecificationIdentifiers(String speckey) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getSpecificationIdentifiers(Long.parseLong(speckey), handle.getRawHandle());
            return SpecificationMarshaller.unmarshallYSpecificationID(result);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Event> getAllResourceEvents(YSpecificationID specID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getAllResourceEvents(handle.getRawHandle());
            return SpecificationMarshaller.unmarshallEvents(result);
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
