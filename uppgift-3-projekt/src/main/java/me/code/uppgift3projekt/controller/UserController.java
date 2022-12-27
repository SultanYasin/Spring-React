package me.code.uppgift3projekt.controller;

import me.code.uppgift3projekt.exception.UserAlreadyExistsException;
import me.code.uppgift3projekt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@CrossOrigin(origins = "*")

public class UserController {


    private AuthenticationManager authenticationManager;
    private final UserService userService;

    @Autowired
    public UserController(UserService userService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }



    @PostMapping("/register")
    public String register(@RequestBody Map<String, Object> credentials) throws UserAlreadyExistsException {
        var username = credentials.get("username");
        var password = credentials.get("password");

        userService.register((String) username, (String) password);
        System.out.println("\n" + username + "\n" + password);

        return "A new user has been registered";
    }
}


