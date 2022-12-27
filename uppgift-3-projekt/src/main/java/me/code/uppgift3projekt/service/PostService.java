package me.code.uppgift3projekt.service;

import me.code.uppgift3projekt.data.Post;
import me.code.uppgift3projekt.exception.PostDoesNotExistException;
import me.code.uppgift3projekt.repository.PostRepository;
import me.code.uppgift3projekt.repository.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService implements TodoService {

    @Autowired
    PostRepository repository;

    @Override
    public Post createTodo(Post todo) {
        System.out.println("\n Service : save ");
        return repository.save(todo);
    }


    public Post updatePost(Long id, Post updatedPost) throws PostDoesNotExistException {
        if (repository.existsById(id)) {

            updatedPost.setId(id);
            return repository.save(updatedPost);
        } else {
            throw new PostDoesNotExistException();
        }
    }


    @Override
    public void deleteTodo(Long id) throws PostDoesNotExistException {
        Post post = repository.findById(id).orElseThrow(() -> new PostDoesNotExistException());
        System.out.println("\n Service : Delete ");
        repository.deleteById(id);

    }

    @Override
    public List<Post> getAllTodos() {
        System.out.println("\n Service : Get all");
        return repository.findAll();
    }

}