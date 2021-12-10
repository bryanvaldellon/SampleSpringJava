package com.samplefullstack.samplefullstack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")//allow any request
public class SampleController {

    @RequestMapping("/hello")
    public String sampleString(){
        return "hello bryan!";
    }
}
