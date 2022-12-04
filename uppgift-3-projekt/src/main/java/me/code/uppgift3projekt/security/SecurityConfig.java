package me.code.uppgift3projekt.security;

import me.code.uppgift3projekt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import java.net.http.HttpRequest;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final  UserService userService;
    @Autowired
    public SecurityConfig( UserService userService){
        this.userService = userService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
                .cors().and().csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new LoginFilter(authenticationManager()))
                .addFilterAfter(new VerifyFilter(userService), LoginFilter.class)
                .authorizeRequests()
                .antMatchers("/info")
                .authenticated()
                .antMatchers("/**")
                .permitAll();
    }

        /*
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

*/
    }

