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

public class LoginFilter<generatedToken> extends UsernamePasswordAuthenticationFilter {

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


    @Override
    protected void successfulAuthentication(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain,
            Authentication authResult
    ) throws IOException, ServletException {
        try {

            var algorithm = Algorithm.HMAC256("secret");
            var generatedToken = JWT.create()
                    .withSubject(authResult.getName())
                    .sign(algorithm);

            response.setHeader("x-genratedtoken" ,generatedToken );// info returns in response
            // without "Access-Control-Expose-Headers" token will be always hidden.
            int counter = 0;
            response.setHeader("Access-Control-Expose-Headers", "x-genratedtoken");//************************
            System.out.println("Generated token is : \n " + generatedToken  +"\n" + ++counter);

        }catch (JWTCreationException exception){
            exception.printStackTrace();
        }

    }


}
