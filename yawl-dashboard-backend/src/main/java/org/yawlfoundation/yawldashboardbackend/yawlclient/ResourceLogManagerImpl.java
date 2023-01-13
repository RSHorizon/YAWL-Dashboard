package org.yawlfoundation.yawldashboardbackend.yawlclient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.jdom2.JDOMException;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceLogGatewayClient;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.FailureMarshaller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import static org.apache.commons.lang3.time.DateUtils.parseDate;

public class ResourceLogManagerImpl implements ResourceLogManager {

    private final ResourceServiceSessionPool resourceManagerSessionPool;
    private final ResourceLogGatewayClient connection;

    public ResourceLogManagerImpl(ResourceServiceSessionPool resourceManagerSessionPool, ResourceLogGatewayClient connection) {
        this.resourceManagerSessionPool = resourceManagerSessionPool;
        this.connection = connection;
    }


    @Override
    public String getSpecificationEvents(YSpecificationID specID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getSpecificationEvents(specID.getIdentifier(), specID.getVersionAsString(), specID.getUri(), handle.getRawHandle());

            return getJsonFromXML(result);
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public String getStatisticsForSpecification(YSpecificationID specID) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            SimpleDateFormat parser=new SimpleDateFormat("yyyy-MM-dd");
            Date myDate = parser.parse("2014-02-14");
            String result = connection.getSpecificationStatistics(specID.getIdentifier(), specID.getVersionAsString(), specID.getUri(), myDate, new Date(), handle.getRawHandle());

            return getJsonFromXML(result);
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
    public String getCaseEvents(String caseId) {
        try (ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getCaseEvents(caseId, handle.getRawHandle());

            return getJsonFromXML(result);
        } catch (IOException ex) {
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
