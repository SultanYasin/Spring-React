package me.code.uppgift3projekt.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import me.code.uppgift3projekt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.http.HttpRequest;

public class VerifyFilter extends OncePerRequestFilter {

    private final UserService userService;

    @Autowired
    public VerifyFilter(UserService userService) {
        this.userService = userService;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
    // verifying, take out the information to check token, right token ... continue, otherwise cut the process
        var authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION); // ****************************** " "Authorization" "

        if (!StringUtils.hasText(authorizationHeader)
                || (StringUtils.hasText(authorizationHeader)
                && !authorizationHeader.startsWith("Bearer "))){
            filterChain.doFilter(request, response);
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

            var user = userService.loadUserByUsername(jwt.getSubject());
            var auth = new UsernamePasswordAuthenticationToken(
                    user.getUsername(),
                    user.getPassword(),
                    user.getAuthorities()
            );
            SecurityContextHolder.getContext().setAuthentication(auth);
            filterChain.doFilter(request , response);

        }catch (JWTVerificationException exception){
            throw new IllegalStateException("Who are you smart ass?");
        }

    }
}
