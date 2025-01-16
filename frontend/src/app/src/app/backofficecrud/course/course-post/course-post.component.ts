import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../../../models/course.model';
import { DanceSchool } from '../../../models/dance-school.model'; // Assurez-vous que le chemin est correct
import { DanceService } from '../../../services/dance.service';

@Component({
  selector: 'app-course-post',
  templateUrl: './course-post.component.html',
  styleUrls: ['./course-post.component.css']
})
export class CoursePostComponent implements OnInit {
  courseForm: FormGroup;
  danceSchools: DanceSchool[] = []; // Liste des écoles de danse

  constructor(
    private fb: FormBuilder,
    private danceService: DanceService,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      contenu: ['', Validators.required],
      instructor: ['', Validators.required],
      danceSchoolId: [null, Validators.required] // Champ pour l'école de danse
    });
  }

  ngOnInit(): void {
    this.loadDanceSchools(); // Charger les écoles de danse disponibles
  }

  loadDanceSchools(): void {
    this.danceService.getAllDanceSchools().subscribe({
      next: (data) => {
        this.danceSchools = data; // Remplir la liste des écoles de danse
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des écoles de danse', err);
      }
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const newCourse: Course = {
        id: null, // L'ID sera généré par le backend
        title: this.courseForm.value.title,
        contenu: this.courseForm.value.contenu,
        instructor: this.courseForm.value.instructor,
        danceSchool: { id: this.courseForm.value.danceSchoolId } as DanceSchool // Associer l'école de danse
      };

      this.danceService.createCourse(newCourse).subscribe({
        next: () => {
          this.router.navigate(['crud/course-list']); // Redirection vers la liste des cours
        },
        error: (err) => {
          console.error('Erreur lors de la création du cours', err);
        }
      });
    } else {
      console.error('Le formulaire n\'est pas valide');
    }
  }
  returnToCourseList(): void {
    this.router.navigate(['crud/course-list']);
  }
  
}