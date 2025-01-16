import { Component, OnInit } from '@angular/core';
import { DanceService } from '../../../services/dance.service';
import { Course } from '../../../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private danceService: DanceService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.danceService.getAllCourses().subscribe({
        next: (data) => {
            this.courses = data;
            console.log(this.courses); // Vérifie les données récupérées
        },
        error: (err) => {
            console.error('Erreur lors de la récupération des cours', err);
        }
    });
}
addCourse(): void {
  this.router.navigate(['crud/course-post']);
}


  deleteCourse(id: number | null): void {
    if (id !== null && confirm('Êtes-vous sûr de vouloir supprimer ce cours ?')) {
      this.danceService.deleteCourse(id).subscribe({
        next: () => {
          this.loadCourses(); // Recharger la liste après la suppression
        },
        error: (err) => {
          console.error('Erreur lors de la suppression du cours', err);
        }
      });
    }
  }

  editCourse(id: number | null): void {
    if (id !== null) {
      this.router.navigate(['crud/course-update', id]);
    }
  }
}