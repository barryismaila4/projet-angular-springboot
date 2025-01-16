import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DanceService } from '../../../services/dance.service';
import { Course } from '../../../models/course.model';
import { DanceSchool } from '../../../models/dance-school.model';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  courseForm: FormGroup;
  danceSchools: DanceSchool[] = [];
  courseId: number | null = null; // Initialisation avec null

  constructor(
    private fb: FormBuilder,
    private danceService: DanceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      contenu: ['', Validators.required],
      instructor: ['', Validators.required],
      danceSchoolId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id')!; // Récupérer l'ID du cours
    this.loadDanceSchools();
    this.loadCourse();
  }

  loadDanceSchools(): void {
    this.danceService.getAllDanceSchools().subscribe({
      next: (data) => {
        this.danceSchools = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des écoles de danse', err);
      }
    });
  }

  loadCourse(): void {
    if (this.courseId !== null) {
      this.danceService.getCourseById(this.courseId).subscribe({
        next: (course) => {
          this.courseForm.patchValue({
            title: course.title,
            contenu: course.contenu,
            instructor: course.instructor,
            danceSchoolId: course.danceSchool.id // Associer l'école de danse
          });
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du cours', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.courseForm.valid && this.courseId !== null) {
      const updatedCourse: Course = {
        id: this.courseId,
        title: this.courseForm.value.title,
        contenu: this.courseForm.value.contenu,
        instructor: this.courseForm.value.instructor,
        danceSchool: { id: this.courseForm.value.danceSchoolId } as DanceSchool
      };

      this.danceService.updateCourse(this.courseId, updatedCourse).subscribe({
        next: () => {
          this.router.navigate(['crud/course-list']); // Redirection vers la liste des cours
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du cours', err);
        }
      });
    } else {
      console.error('Le formulaire n\'est pas valide ou l\'ID du cours est manquant');
    }
  }
}