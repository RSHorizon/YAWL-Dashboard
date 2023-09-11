package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawl.engine.interfce.WorkItemRecord;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceLogManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManager;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

/**
 * @author Robin Steinwarz
 */
@RestController
@Secured("ROLE_ADMIN")
public class WorkItemController {

    @Autowired
    private WorkItemManager workItemManager;

    @Autowired
    private ResourceLogManagerImpl resourceLogManager;

    @RequestMapping(value = "/api/specification/{uri}/{specificationID}/{specversion}/{caseId}/workitems", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public Set<WorkItemRecord> getAllWorkitemsFromCase(@PathVariable("specificationID") String specificationID,
                                                       @PathVariable("specversion") String specversion,
                                                       @PathVariable("uri") String uri,
                                                       @PathVariable("caseId") String caseId) {
        Set<WorkItemRecord> workItemRecords = workItemManager.getAllWorkItemsForCase(specificationID, specversion, uri, caseId);
        return workItemRecords;
    }

    @RequestMapping(value = "/api/specification/{uri}/{specificationID}/{specversion}/workitems", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public Set<WorkItemRecord> getAllWorkitemsFromSpecification(@PathVariable("specificationID") String specificationID,
                                                                @PathVariable("specversion") String specversion,
                                                                @PathVariable("uri") String uri) {
        return workItemManager.getAllWorkItemsForSpecification(specificationID, specversion, uri);
    }


}
