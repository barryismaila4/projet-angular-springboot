package com.dancebackend.dancebackend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference; // Importer l'annotation
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String contenu;
    private String instructor;

    @ManyToOne
    @JoinColumn(name = "dance_school_id")
    @JsonIgnoreProperties("courses")
    private DanceSchool danceSchool;


    // Constructeur sans argument
    public Course() {}

    // Constructeur avec tous les champs
    public Course(Long id, String title, String contenu, String instructor, DanceSchool danceSchool) {
        this.id = id;
        this.title = title;
        this.contenu = contenu;
        this.instructor = instructor;
        this.danceSchool = danceSchool;
    }

    // Getters et setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public DanceSchool getDanceSchool() {
        return danceSchool;
    }

    public void setDanceSchool(DanceSchool danceSchool) {
        this.danceSchool = danceSchool;
    }

    // Méthode toString
    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", contenu='" + contenu + '\'' +
                ", instructor='" + instructor + '\'' +
                ", danceSchool=" + danceSchool +
                '}';
    }
}