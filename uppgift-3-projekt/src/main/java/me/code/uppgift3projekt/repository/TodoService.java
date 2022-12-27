package me.code.uppgift3projekt.repository;

import me.code.uppgift3projekt.data.Post;
import me.code.uppgift3projekt.exception.PostDoesNotExistException;

import java.util.List;
import java.util.Optional;

public interface TodoService {

        Post createTodo(Post todo);
        void deleteTodo(Long id) throws PostDoesNotExistException;
        List<Post> getAllTodos();


}


