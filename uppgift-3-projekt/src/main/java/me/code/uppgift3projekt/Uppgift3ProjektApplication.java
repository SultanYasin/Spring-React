package me.code.uppgift3projekt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@ConfigurationPropertiesScan
@CrossOrigin("*")
public class Uppgift3ProjektApplication {

    public static void main(String[] args) {
        SpringApplication.run(Uppgift3ProjektApplication.class, args);
    }

}