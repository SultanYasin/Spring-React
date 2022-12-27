package me.code.uppgift3projekt.repository;


import me.code.uppgift3projekt.data.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@Repository
@EnableJpaRepositories
public interface PostRepository extends JpaRepository<Post, Long> {


}

