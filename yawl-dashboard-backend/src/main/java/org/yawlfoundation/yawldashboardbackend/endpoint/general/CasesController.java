package org.yawlfoundation.yawldashboardbackend.endpoint.general;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceLogManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManager;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Case;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@RestController
@Secured("ROLE_ADMIN")
public class CasesController {
    @Autowired
    private WorkItemManager workItemManager;

    @Autowired
    private ResourceLogManagerImpl resourceLogManager;

    @RequestMapping(value = "/api/specification/{uri}/{specificationID}/{specversion}/cases", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public List<Integer> getCases(@PathVariable("specificationID") String specificationID,
                                      @PathVariable("specversion") String specversion,
                                      @PathVariable("uri") String uri) {
        return workItemManager.getRunningCasesBySpec(specificationID, specversion, uri);
    }

}
