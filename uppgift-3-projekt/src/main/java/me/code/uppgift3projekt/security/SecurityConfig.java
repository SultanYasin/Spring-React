package me.code.uppgift3projekt.security;

import me.code.uppgift3projekt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@EnableWebSecurity
@Configuration
@EnableAutoConfiguration
public class SecurityConfig extends WebSecurityConfigurerAdapter {




    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }



    public void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        res.setHeader("Access-Control-Expose-Headers", "Authorization");
      //res.setHeader("Access-Control-Allow-Credentials", "x-genrated-token"); // before but it still needs
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


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
        /*
                        .and()
                .logout()
                .permitAll()
                .and()
                .exceptionHandling()
                .accessDeniedPage("/access-denied");
         */


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

