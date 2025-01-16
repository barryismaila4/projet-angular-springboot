package com.dancebackend.dancebackend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class DanceCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "danceCategory", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<DanceSchool> danceSchools;

    // Constructeur sans argument
    public DanceCategory() {}

    // Constructeur avec tous les champs
    public DanceCategory(Long id, String name, List<DanceSchool> danceSchools) {
        this.id = id;
        this.name = name;
        this.danceSchools = danceSchools;
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

    public List<DanceSchool> getDanceSchools() {
        return danceSchools;
    }

    public void setDanceSchools(List<DanceSchool> danceSchools) {
        this.danceSchools = danceSchools;
    }

    // Méthode toString
    @Override
    public String toString() {
        return "DanceCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", danceSchools=" + danceSchools +
                '}';
    }
}
