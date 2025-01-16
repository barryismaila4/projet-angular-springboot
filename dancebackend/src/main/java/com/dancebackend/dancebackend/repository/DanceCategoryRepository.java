package com.dancebackend.dancebackend.repository;

import com.dancebackend.dancebackend.entity.DanceCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DanceCategoryRepository extends JpaRepository<DanceCategory, Long> {
    // Tu peux ajouter des méthodes personnalisées si nécessaire
}
