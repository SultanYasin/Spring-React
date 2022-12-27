package me.code.uppgift3projekt.data;

import javax.persistence.*;

@Entity
public class Post{

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false, unique = true)
        private String title;

        @Column(nullable = false )
        private String description;

        @Column
        private boolean completed;


    public Post( String title , String description ) {
        this.id = id;
        this.title = title;
        this.description = description;

    }

    public Post() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


}









