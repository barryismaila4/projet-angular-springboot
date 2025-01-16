import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DanceCategory } from '../models/dance-category.model';
import { DanceSchool } from '../models/dance-school.model';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class DanceService {

  private apiUrl = 'http://localhost:8080/api'; // Remplacez par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  // -------------------- DanceCategory CRUD --------------------
  
  // Créer une DanceCategory
  createDanceCategory(category: DanceCategory): Observable<DanceCategory> {
    return this.http.post<DanceCategory>(`${this.apiUrl}/categories`, category);
  }

  // Obtenir toutes les DanceCategories
  getAllDanceCategories(): Observable<DanceCategory[]> {
    return this.http.get<DanceCategory[]>(`${this.apiUrl}/categories`);
  }

  // Obtenir une DanceCategory par ID
  getDanceCategoryById(id: number): Observable<DanceCategory> {
    return this.http.get<DanceCategory>(`${this.apiUrl}/categories/${id}`);
  }

  // Mettre à jour une DanceCategory
  updateDanceCategory(id: number, updatedCategory: DanceCategory): Observable<DanceCategory> {
    return this.http.put<DanceCategory>(`${this.apiUrl}/categories/${id}`, updatedCategory);
  }

  // Supprimer une DanceCategory
  deleteDanceCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/categories/${id}`);
  }

  // -------------------- DanceSchool CRUD --------------------
  
  // Créer une DanceSchool
  createDanceSchool(school: DanceSchool): Observable<DanceSchool> {
    return this.http.post<DanceSchool>(`${this.apiUrl}/schools`, school);
  }

  // Obtenir toutes les DanceSchools
  getAllDanceSchools(): Observable<DanceSchool[]> {
    return this.http.get<DanceSchool[]>(`${this.apiUrl}/schools`);
  }

  // Obtenir une DanceSchool par ID
  getDanceSchoolById(id: number): Observable<DanceSchool> {
    return this.http.get<DanceSchool>(`${this.apiUrl}/schools/${id}`);
  }

  // Mettre à jour une DanceSchool
  updateDanceSchool(id: number, updatedSchool: DanceSchool): Observable<DanceSchool> {
    return this.http.put<DanceSchool>(`${this.apiUrl}/schools/${id}`, updatedSchool);
  }

  // Supprimer une DanceSchool
  deleteDanceSchool(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/schools/${id}`);
  }

  // -------------------- Course CRUD --------------------
  
  // Créer un Course
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/courses`, course);
  }

  // Obtenir tous les Courses
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses`);
  }

  // Obtenir un Course par ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/courses/${id}`);
  }

  // Mettre à jour un Course
  updateCourse(id: number, updatedCourse: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/courses/${id}`, updatedCourse);
  }

  // Supprimer un Course
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/courses/${id}`);
  }
}
