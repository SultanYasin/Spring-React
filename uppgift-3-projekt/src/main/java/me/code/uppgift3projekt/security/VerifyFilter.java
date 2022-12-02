package me.code.uppgift3projekt.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class VerifyFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
    // verifying, take out the information to check token, right token ... continue, otherwise cut the process
        var authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response); // continue with the chain without doing anything
            return;
        }


        // delete "Bearer" and get the rest of the token
        var jwtToken = authorizationHeader.substring("Bearer ".length());
        if (jwtToken.isBlank()){
            filterChain.doFilter(request, response);
            return;
        }

        try {
            var algorithm = Algorithm.HMAC256("secret");
            var verifier = JWT.require(algorithm).build();
            var jwt = verifier.verify(jwtToken);

            var auth = new UsernamePasswordAuthenticationToken(jwt.getSubject() , "" ,null);
            SecurityContextHolder.getContext().setAuthentication(auth);

            System.out.println( jwt.getSubject());

            filterChain.doFilter(request , response);

        }catch (JWTVerificationException exception){
            throw new IllegalStateException("Who are you smart ass?");
        }

    }
}
