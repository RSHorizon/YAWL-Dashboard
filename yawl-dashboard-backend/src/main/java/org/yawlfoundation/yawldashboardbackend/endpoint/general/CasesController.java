package org.yawlfoundation.yawldashboardbackend.endpoint.general;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.model.Case;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceLogManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManager;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Specification;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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
    public List<Case> getCases(@PathVariable("specificationID") String specificationID,
                                      @PathVariable("specversion") String specversion,
                                      @PathVariable("uri") String uri) {
        List<Integer> caseIds = workItemManager.getRunningCasesBySpec(specificationID, specversion, uri);
        List<Case> cases = caseIds.stream().map(caseInstance -> new Case("" +caseInstance, resourceLogManager.getCaseEvents("" + caseInstance)))
                .collect(Collectors.toList());

        return cases;
    }

    @RequestMapping(value = "/api/case/{caseId}/events", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public String getCases(@PathVariable("caseId") String caseId) {
        return resourceLogManager.getCaseEvents(caseId);
    }

}
