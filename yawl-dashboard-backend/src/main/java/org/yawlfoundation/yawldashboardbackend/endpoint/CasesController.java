package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.yawlfoundation.yawldashboardbackend.dto.CaseDTO;
import org.yawlfoundation.yawldashboardbackend.yawlclient.ResourceLogManagerImpl;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManager;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Event;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Robin Steinwarz
 */
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
    public List<CaseDTO> getCases(@PathVariable("specificationID") String specificationID,
                                  @PathVariable("specversion") String specversion,
                                  @PathVariable("uri") String uri) {
        List<Integer> caseIds = workItemManager.getRunningCasesBySpec(specificationID, specversion, uri);
        //List<Case> cases = caseIds.stream().map(caseInstance -> new Case("" +caseInstance, resourceLogManager.getCaseEvents("" + caseInstance)))
        //        .collect(Collectors.toList());

        return new ArrayList<>();
    }

    @RequestMapping(value = "/api/case/{caseId}/events", method = RequestMethod.GET)
    @ResponseBody
    @Transactional
    public List<Event> getCases(@PathVariable("caseId") String caseId) {
        return resourceLogManager.getCaseEvents(caseId);
    }

}
