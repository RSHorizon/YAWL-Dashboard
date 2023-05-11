package org.yawlfoundation.yawldashboardbackend.yawlclient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.jdom2.JDOMException;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawl.engine.interfce.interfaceE.YLogGatewayClient;
import org.yawlfoundation.yawl.worklet.support.WorkletGatewayClient;
import org.yawlfoundation.yawldashboardbackend.session.interfaceE.InterfaceESessionHandle;
import org.yawlfoundation.yawldashboardbackend.session.interfaceE.InterfaceESessionPool;
import org.yawlfoundation.yawldashboardbackend.session.workletservice.PermanentWsSessionPool;
import org.yawlfoundation.yawldashboardbackend.session.workletservice.SimpleWsSessionHandle;
import org.yawlfoundation.yawldashboardbackend.session.workletservice.WsSessionHandle;
import org.yawlfoundation.yawldashboardbackend.session.workletservice.WsSessionPool;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.FailureMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;

import java.io.IOException;

/**
 * @author Robin Steinwarz
 */

public class WsManagerImpl implements WsManager {

    private final PermanentWsSessionPool wsSessionPool;
    private final WorkletGatewayClient connection;

    public WsManagerImpl(PermanentWsSessionPool wsSessionPool, WorkletGatewayClient connection) {
        this.wsSessionPool = wsSessionPool;
        this.connection = connection;
    }

    public String getRunningWorklets(){
        try (WsSessionHandle handle = wsSessionPool.getHandle()) {
            String result = connection.getRunningWorklets(handle.getRawHandle());
            return result;
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    public String getOrphanedWorklets(){
        try (WsSessionHandle handle = wsSessionPool.getHandle()) {
            String result = connection.getOrphanedWorklets(handle.getRawHandle());
            return result;
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    public String getWorklet(YSpecificationID specificationID){
        try (WsSessionHandle handle = wsSessionPool.getHandle()) {
            String result = connection.getWorklet(specificationID, handle.getRawHandle());
            return result;
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    public String getWorkletNames(){
        try (WsSessionHandle handle = wsSessionPool.getHandle()) {
            String result = connection.getWorkletNames(handle.getRawHandle());
            return result;
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    public String getWorkletInfoList(){
        try (WsSessionHandle handle = wsSessionPool.getHandle()) {
            String result = connection.getWorkletInfoList(handle.getRawHandle());
            return result;
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
