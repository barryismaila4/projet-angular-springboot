package com.dancebackend.dancebackend.controller;

import com.dancebackend.dancebackend.entity.Course;
import com.dancebackend.dancebackend.entity.DanceCategory;
import com.dancebackend.dancebackend.entity.DanceSchool;
import com.dancebackend.dancebackend.service.DanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") // Autorise les requêtes depuis http://localhost:4200
@RestController
@RequestMapping("/api")
public class DanceController {

    @Autowired
    private DanceService danceService;

    // -------------------- DanceCategory CRUD --------------------

    @PostMapping("/categories")
    public ResponseEntity<DanceCategory> createDanceCategory(@RequestBody DanceCategory category) {
        DanceCategory createdCategory = danceService.createDanceCategory(category);
        return ResponseEntity.status(201).body(createdCategory);
    }

    @GetMapping("/categories")
    public List<DanceCategory> getAllDanceCategories() {
        return danceService.getAllDanceCategories();
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<DanceCategory> getDanceCategoryById(@PathVariable Long id) {
        return danceService.getDanceCategoryById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<DanceCategory> updateDanceCategory(@PathVariable Long id, @RequestBody DanceCategory updatedCategory) {
        try {
            DanceCategory category = danceService.updateDanceCategory(id, updatedCategory);
            return ResponseEntity.ok(category);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<Void> deleteDanceCategory(@PathVariable Long id) {
        try {
            danceService.deleteDanceCategory(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // -------------------- DanceSchool CRUD --------------------

    @PostMapping("/schools")
    public ResponseEntity<DanceSchool> createDanceSchool(@RequestBody DanceSchool school) {
        DanceSchool createdSchool = danceService.createDanceSchool(school);
        return ResponseEntity.status(201).body(createdSchool);
    }
    // Endpoint pour récupérer les écoles de danse par catégorie
    @GetMapping("/categories/{categoryId}/schools")
    public List<DanceSchool> getSchoolsByCategoryId(@PathVariable Long categoryId) {
        return danceService.getSchoolsByCategoryId(categoryId);
    }


    @GetMapping("/schools")
    public List<DanceSchool> getAllDanceSchools() {
        return danceService.getAllDanceSchools();
    }

    @GetMapping("/schools/{id}")
    public ResponseEntity<DanceSchool> getDanceSchoolById(@PathVariable Long id) {
        return danceService.getDanceSchoolById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/schools/{id}")
    public ResponseEntity<DanceSchool> updateDanceSchool(@PathVariable Long id, @RequestBody DanceSchool updatedSchool) {
        try {
            DanceSchool school = danceService.updateDanceSchool(id, updatedSchool);
            return ResponseEntity.ok(school);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/schools/{id}")
    public ResponseEntity<Void> deleteDanceSchool(@PathVariable Long id) {
        try {
            danceService.deleteDanceSchool(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // -------------------- Course CRUD --------------------

    @PostMapping("/courses")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        Course createdCourse = danceService.createCourse(course);
        return ResponseEntity.status(201).body(createdCourse);
    }

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return danceService.getAllCourses();
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        return danceService.getCourseById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course updatedCourse) {
        try {
            Course course = danceService.updateCourse(id, updatedCourse);
            return ResponseEntity.ok(course);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        try {
            danceService.deleteCourse(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/schools/{schoolId}/courses")
    public List<Course> getCoursesBySchoolId(@PathVariable Long schoolId) {
        return danceService.getCoursesByDanceSchoolId(schoolId);
    }
}