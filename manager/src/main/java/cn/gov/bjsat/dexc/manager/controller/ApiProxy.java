package cn.gov.bjsat.dexc.manager.controller;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.net.URISyntaxException;

/**
 * Created by grf11_000 on 2015/10/18.
 */

@Controller
@RequestMapping("/apiproxy")
public class ApiProxy {

    @RequestMapping("/apiproxy/**")
    @ResponseBody
    public String mirrorRest(@RequestBody String body, HttpMethod method, HttpServletRequest request,
                             HttpServletResponse response) throws URISyntaxException
    {
        URI uri = new URI("http", null, "server", 8080, request.getRequestURI(), request.getQueryString(), null);

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String> responseEntity =
                restTemplate.exchange(uri, method, new HttpEntity<String>(body), String.class);

        return responseEntity.getBody();
    }

    @RequestMapping("/regnode")
    @ResponseBody
    public String regnode(HttpServletRequest request)
    {
        String ipAddress = request.getHeader("X-FORWARDED-FOR");
        if (ipAddress == null) {
            ipAddress = request.getRemoteAddr();
        }

        return ipAddress + ":" + request.getServerPort();
    }


}
