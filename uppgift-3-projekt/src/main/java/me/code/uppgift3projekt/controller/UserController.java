package me.code.uppgift3projekt.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import me.code.uppgift3projekt.data.User;
import me.code.uppgift3projekt.exception.UserAlreadyExistsException;
import me.code.uppgift3projekt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
//@RequestMapping("user")
public class UserController {

    private final UserService userService;
    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/a1")
    public String greetings(){
        return "hi from  controller!";
    }

    @GetMapping("info")
    public String info(){
        return "hi from info!";
    }

    @PostMapping("/register")
    public String register( @RequestBody Map<String, Object> credentials ) throws UserAlreadyExistsException {
        var username = credentials.get("username");
        var password = credentials.get("password");

        userService.register( (String) username , (String) password);

        System.out.println("\n" +username + "\n" + password);

        return "A new user has been registered";
    }
/*
    @PostMapping("/login")
    public ResponseEntity<?> login(User req){

            try {
                Authentication authenticate = authenticationManager.authenticate(new
                         UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

                User user = (User) authenticate.getPrincipal();
                return ResponseEntity.ok()
                        .header(HttpHeaders.AUTHORIZATION, jwtTokenUtil.generateAccessToken(user))
                        .body(userViewMapper.toUserView(user));
            } catch (BadCredentialsException ex) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        }
        return ResponseEntity.ok(null);
    }*/


}
