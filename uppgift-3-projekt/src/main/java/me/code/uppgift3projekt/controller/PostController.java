package me.code.uppgift3projekt.controller;

import me.code.uppgift3projekt.data.Post;
import me.code.uppgift3projekt.service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/psots")
public class PostController {
    /*
Skapa posts (kopplad till användare)
Ta bort posts (bara egna posts
Ändra posts (bara egna posts)
Lista upp posts (av alla användare)
Registrering (av användare)
Inloggning (av användare)

    public PostController(){}

        @Autowired
        PostService postService;

    private final Logger logger = LoggerFactory.getLogger(PostController.class);

    @PostMapping("/add")
    public Post create(@RequestBody Post post ){
        logger.info("Post object {}" , post.toString());
        return postService.create(post);
    }
    @DeleteMapping("/delete")

    @PutMapping("/{id}")

    @GetMapping("/all")

    @GetMapping("/{id}")
*/





}