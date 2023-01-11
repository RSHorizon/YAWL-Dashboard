package org.yawlfoundation.yawldashboardbackend.test;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@SpringBootTest
public class CorsTest {

    private static final Logger LOG = LoggerFactory.getLogger(CorsTest.class);


    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void corsTest() throws Exception {
        LOG.debug("fuzckj");
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/",
                String.class)).contains("Hello, World");
    }

}
