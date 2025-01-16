package com.dancebackend.dancebackend.service;

import com.dancebackend.dancebackend.entity.Course;
import com.dancebackend.dancebackend.entity.DanceCategory;
import com.dancebackend.dancebackend.entity.DanceSchool;
import com.dancebackend.dancebackend.repository.CourseRepository;
import com.dancebackend.dancebackend.repository.DanceCategoryRepository;
import com.dancebackend.dancebackend.repository.DanceSchoolRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DanceService {

    private final DanceCategoryRepository danceCategoryRepository;
    private final DanceSchoolRepository danceSchoolRepository;
    private final CourseRepository courseRepository;

    public DanceService(DanceCategoryRepository danceCategoryRepository, DanceSchoolRepository danceSchoolRepository, CourseRepository courseRepository) {
        this.danceCategoryRepository = danceCategoryRepository;
        this.danceSchoolRepository = danceSchoolRepository;
        this.courseRepository = courseRepository;
    }

    // -------------------- DanceCategory CRUD --------------------

    public DanceCategory createDanceCategory(DanceCategory category) {
        return danceCategoryRepository.save(category);
    }

    public List<DanceCategory> getAllDanceCategories() {
        return danceCategoryRepository.findAll();
    }

    public Optional<DanceCategory> getDanceCategoryById(Long id) {
        return danceCategoryRepository.findById(id);
    }

    public DanceCategory updateDanceCategory(Long id, DanceCategory updatedCategory) {
        return danceCategoryRepository.findById(id).map(category -> {
            category.setName(updatedCategory.getName());
            return danceCategoryRepository.save(category);
        }).orElseThrow(() -> new RuntimeException("DanceCategory not found with id: " + id));
    }

    public void deleteDanceCategory(Long id) {
        danceCategoryRepository.deleteById(id);
    }

    // -------------------- DanceSchool CRUD --------------------

    public DanceSchool createDanceSchool(DanceSchool school) {
        return danceSchoolRepository.save(school);
    }

    public List<DanceSchool> getAllDanceSchools() {
        return danceSchoolRepository.findAll();
    }

    public Optional<DanceSchool> getDanceSchoolById(Long id) {
        return danceSchoolRepository.findById(id);
    }

    public DanceSchool updateDanceSchool(Long id, DanceSchool updatedSchool) {
        return danceSchoolRepository.findById(id).map(school -> {
            school.setName(updatedSchool.getName());
            school.setLocalisation(updatedSchool.getLocalisation());
            school.setOpenday(updatedSchool.getOpenday());
            school.setCloseday(updatedSchool.getCloseday());
            school.setOpentime(updatedSchool.getOpentime());
            school.setClosetime(updatedSchool.getClosetime());
            return danceSchoolRepository.save(school);
        }).orElseThrow(() -> new RuntimeException("DanceSchool not found with id: " + id));
    }

    public void deleteDanceSchool(Long id) {
        danceSchoolRepository.deleteById(id);
    }

    // -------------------- Course CRUD --------------------

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    public Course updateCourse(Long id, Course updatedCourse) {
        return courseRepository.findById(id).map(course -> {
            course.setTitle(updatedCourse.getTitle());
            course.setContenu(updatedCourse.getContenu());
            course.setInstructor(updatedCourse.getInstructor());
            return courseRepository.save(course);
        }).orElseThrow(() -> new RuntimeException("Course not found with id: " + id));
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}