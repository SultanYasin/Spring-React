package me.code.uppgift3projekt.data;

public class Post {

    private String title;
    private String content;
    private User creator;

    public Post() {}

    public Post(String title, String content, User creator) {
        this.title = title;
        this.content = content;
        this.creator = creator;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getCreator() {
        return creator;
    }

    public void getCreator(User creator) {
        this.creator = creator;
    }
}