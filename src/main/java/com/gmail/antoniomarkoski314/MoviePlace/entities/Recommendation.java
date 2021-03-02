package com.gmail.antoniomarkoski314.MoviePlace.entities;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;

@Entity
@Table(name = "recommendation")
public class Recommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String title;
    @Column
    private String imagePath;
    @Column
    private String text;
    @Column
    private String date;

    public Recommendation(){}

    public Recommendation(String title, String text) {
        this.title = title;
        this.text = text;
    }

    public Recommendation(String title, String text, String date, String imagePath) {
        this.title = title;
        this.text = text;
        this.date = date;
        this.imagePath = imagePath;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text;
    }

    public String getDate() {
        return date;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setText(String text) { this.text = text; }

    public void setDate(String date) { this.date = date; }

    public void setImagePath(String imagePath) { this.imagePath = imagePath; }

    @Override
    public String toString() {
        return "Recommendation{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
