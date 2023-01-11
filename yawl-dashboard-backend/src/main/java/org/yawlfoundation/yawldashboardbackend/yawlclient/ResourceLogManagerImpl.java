package org.yawlfoundation.yawldashboardbackend.yawlclient;

import org.jdom2.JDOMException;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawl.resourcing.rsInterface.ResourceLogGatewayClient;
import org.yawlfoundation.yawl.resourcing.rsInterface.WorkQueueGatewayClient;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.FailureMarshaller;
import org.yawlfoundation.yawldashboardbackend.yawlclient.mashaller.ParticipantMarshaller;

import java.io.IOException;

public class ResourceLogManagerImpl implements ResourceLogManager {

    private final ResourceServiceSessionPool	resourceManagerSessionPool;
    private final ResourceLogGatewayClient connection;



    public ResourceLogManagerImpl(ResourceServiceSessionPool resourceManagerSessionPool, ResourceLogGatewayClient connection) {
        this.resourceManagerSessionPool = resourceManagerSessionPool;
        this.connection = connection;
    }

    @Override
    public String getSpecificationStatistics(YSpecificationID specID) {
        try(ResourceServiceSessionHandle handle = resourceManagerSessionPool.getHandle()) {
            String result = connection.getSpecificationStatistics(specID, handle.getRawHandle());
            String a = "s";

            if(!connection.successful(result)) {
                throw new RuntimeException(FailureMarshaller.parseFailure(result));
            } else {
                return null;
                //return ParticipantMarshaller.parseParticipants(result);
            }
        }
        catch(IOException | JDOMException ex) {
            throw new RuntimeException(ex);
        }
    }
}
