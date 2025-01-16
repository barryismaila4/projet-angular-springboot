package com.dancebackend.dancebackend.repository;

import com.dancebackend.dancebackend.entity.DanceSchool;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DanceSchoolRepository extends JpaRepository<DanceSchool, Long> {
    // Exemple : Trouver toutes les écoles par catégorie
    List<DanceSchool> findByDanceCategoryId(Long danceCategoryId);
}
