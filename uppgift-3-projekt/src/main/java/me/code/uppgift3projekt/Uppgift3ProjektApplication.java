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
/*
Denna uppgift består av att bygga ett API och en frontend. Det är ett grupp projekt och ni använder samma grupper som förut. API:et och frontend delarna beskrivs separat nedanför.

API del:
Ladda ned projektet som ligger som nedladdning i denna uppgift. Det är ett projekt byggt med Spring. Projektet är dock inte färdigt och saknar API:et samt autentisering.
Det är er uppgift att bygga ut projektet genom att lägga till ett API (controllers och endpoints) samt autentisering med JWT.

Den kan behövas att ni bygger på det existerande projektet med funktionalitet i service eller repository.

Funktionalitet som skall representeras i API:et

·        Skapa posts (kopplad till användare)

·        Ta bort posts (bara egna posts)

·        Ändra posts (bara egna posts)

·        Lista upp posts (av alla användare)

·        Registrering (av användare)

·        Inloggning (av användare)


Frontend del

Bygg en frontend till föregående projekt där API:et används.
Man skall kunna registrera användare, logga in, skapa posts, ta bort sina egna posts, ändra sina egna posts och se en lista på alla posts (för alla användare).

Använd valfritt ramverk eller bibliotek.

[10:32] William Enander
response.addHeader("Access-Control-Expose-Headers", "Authorization")



    CorsFilter corsFilter = new CorsFilter();
    corsFilter.setAllowedHeaders("Content-Type, Access-Control-Allow-Headers, Access-Control-Expose-Headers, Content-Disposition,
    Authorization, X-Requested-With");
    corsFilter.setExposedHeaders("Content-Disposition");


*/