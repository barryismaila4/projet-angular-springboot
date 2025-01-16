package com.dancebackend.dancebackend.repository;

import com.dancebackend.dancebackend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // Exemple : Trouver tous les cours par école
    List<Course> findByDanceSchoolId(Long danceSchoolId);
}
