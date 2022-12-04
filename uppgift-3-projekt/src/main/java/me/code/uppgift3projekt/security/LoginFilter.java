package me.code.uppgift3projekt.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginFilter extends UsernamePasswordAuthenticationFilter {

   private final AuthenticationManager manger;

   @Autowired
   public LoginFilter(AuthenticationManager manger){
       this.manger = manger;
   }

    @Override // autentisering
    public Authentication attemptAuthentication(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws AuthenticationException {

    //get username & password from header. all ok? return new token
        var username = request.getHeader("username");
        var password = request.getHeader("password");

        var auth =  new UsernamePasswordAuthenticationToken(username , password);
        return manger.authenticate(auth);
    }


    @Override // om autentisering lyckades
    protected void successfulAuthentication(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain,
            Authentication authResult // I can get username from here
    ) throws IOException, ServletException {

        try {

            var algorithm = Algorithm.HMAC256("secret");// all servers must have same code -> used to balance loading in all servers
            // create new token by using the algorithm
            var generatedToken = JWT.create()
                    .withSubject(authResult.getName()) // subject is the name of the user that trying to login, its value I get from  Authentication authResult in the constructor
                    .sign(algorithm);

            // info returns in response
            response.addHeader("genrated token " ,generatedToken );

        }catch (JWTCreationException exception){
           // exception.getCause().getMessage().toString();
            exception.printStackTrace();

        }

    }
}
