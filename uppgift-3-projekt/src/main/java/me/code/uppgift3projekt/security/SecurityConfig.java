package me.code.uppgift3projekt.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import java.net.http.HttpRequest;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        return http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new LoginFilter())
                .addFilterAfter(new VerifyFilter(), LoginFilter.class) // roles
                .authorizeRequests()
                .antMatchers("/info")
                .authenticated()
                .antMatchers("/**")
                .permitAll()
                .and()
                .build();



    }



}
