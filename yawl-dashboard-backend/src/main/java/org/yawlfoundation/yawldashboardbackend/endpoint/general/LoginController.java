package org.yawlfoundation.yawldashboardbackend.endpoint.general;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.yawlfoundation.yawldashboardbackend.yawlclient.WorkItemManager;

@RestController
public class LoginController {
    @RequestMapping(value="/login", method= RequestMethod.POST)
    public void login() {
        // Specification in Spring security
        // Declaration necessary for MVC CORS configuration
    }

    @RequestMapping(value="/logout", method= RequestMethod.GET)
    public void logout() {
        // Specification in Spring security
        // Declaration necessary for MVC CORS configuration
    }
}
