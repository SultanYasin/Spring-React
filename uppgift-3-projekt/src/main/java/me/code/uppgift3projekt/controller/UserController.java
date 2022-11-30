package me.code.uppgift3projekt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("user")
public class UserController {

    @GetMapping("/a1")
    public String greetings(){
        return "hi from  controller!";
    }

    @GetMapping("info")
    public String info(){
        return "hi from info!";
    }

}
