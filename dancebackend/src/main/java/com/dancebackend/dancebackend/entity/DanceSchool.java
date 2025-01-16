package com.dancebackend.dancebackend.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class DanceSchool {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String localisation;
    private String openday;
    private String closeday;
    private String opentime;
    private String closetime;

    @ManyToOne
    @JoinColumn(name = "dance_category_id")

    private DanceCategory danceCategory;

    @OneToMany(mappedBy = "danceSchool", cascade = CascadeType.ALL)

    @JsonIgnoreProperties("danceSchool")

    private List<Course> courses;

    // Constructeur sans argument
    public DanceSchool() {}

    // Constructeur avec tous les champs
    public DanceSchool(Long id, String name, String localisation, String openday, String closeday,
                       String opentime, String closetime, DanceCategory danceCategory, List<Course> courses) {
        this.id = id;
        this.name = name;
        this.localisation = localisation;
        this.openday = openday;
        this.closeday = closeday;
        this.opentime = opentime;
        this.closetime = closetime;
        this.danceCategory = danceCategory;
        this.courses = courses;
    }

    // Getters et setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocalisation() {
        return localisation;
    }

    public void setLocalisation(String localisation) {
        this.localisation = localisation;
    }

    public String getOpenday() {
        return openday;
    }

    public void setOpenday(String openday) {
        this.openday = openday;
    }

    public String getCloseday() {
        return closeday;
    }

    public void setCloseday(String closeday) {
        this.closeday = closeday;
    }

    public String getOpentime() {
        return opentime;
    }

    public void setOpentime(String opentime) {
        this.opentime = opentime;
    }

    public String getClosetime() {
        return closetime;
    }

    public void setClosetime(String closetime) {
        this.closetime = closetime;
    }

    public DanceCategory getDanceCategory() {
        return danceCategory;
    }

    public void setDanceCategory(DanceCategory danceCategory) {
        this.danceCategory = danceCategory;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    // Méthode toString
    @Override
    public String toString() {
        return "DanceSchool{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", localisation='" + localisation + '\'' +
                ", openday='" + openday + '\'' +
                ", closeday='" + closeday + '\'' +
                ", opentime='" + opentime + '\'' +
                ", closetime='" + closetime + '\'' +
                ", danceCategory=" + danceCategory +
                ", courses=" + courses +
                '}';
    }
}