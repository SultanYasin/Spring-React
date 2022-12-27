package me.code.uppgift3projekt.controller;

import me.code.uppgift3projekt.data.Post;
import me.code.uppgift3projekt.exception.PostDoesNotExistException;
import me.code.uppgift3projekt.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/dashboard")
public class PostController {
    public PostController(){}

    @Autowired
    PostService service;

    @PostMapping("/create")
    public Post createTodo(@RequestBody Post post) {
        return service.createTodo(post);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Post> updateItem(@PathVariable Long id, @RequestBody Post updatedPost) {
        try {
            Post post = service.updatePost(id, updatedPost);
            return ResponseEntity.ok(post);

        } catch (PostDoesNotExistException e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("delete/{id}")
    public void deleteTodo(@PathVariable Long id) throws PostDoesNotExistException {
        service.deleteTodo(id);
    }

    @GetMapping("/getAll")
    public List<Post> getAllTodos() {
        return service.getAllTodos();
    }

    @GetMapping("/greeting")
    public String greeting(){
        return "Hi from protected mapping";
    }


}











