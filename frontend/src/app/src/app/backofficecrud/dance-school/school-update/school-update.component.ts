import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DanceSchool } from '../../../models/dance-school.model';
import { DanceCategory } from '../../../models/dance-category.model';
import { DanceService } from '../../../services/dance.service';

@Component({
  selector: 'app-school-update',
  templateUrl: './school-update.component.html',
  styleUrls: ['./school-update.component.css']
})
export class SchoolUpdateComponent implements OnInit {
  schoolForm: FormGroup;
  schoolId!: number;  // Ajoutez le "!" pour indiquer que la propriété sera assignée plus tard
  danceCategories: DanceCategory[] = [];  // Pour stocker les catégories de danse disponibles

  constructor(
    private fb: FormBuilder,
    private danceService: DanceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.schoolForm = this.fb.group({
      name: ['', Validators.required],
      localisation: ['', Validators.required],
      openday: ['', Validators.required],
      closeday: ['', Validators.required],
      opentime: ['', Validators.required],
      closetime: ['', Validators.required],
      danceCategoryId: ['', Validators.required]  // Pour la catégorie de danse
    });
  }

  ngOnInit(): void {
    // Initialisation de "schoolId" à partir des paramètres d'URL
    this.schoolId = +this.route.snapshot.paramMap.get('id')!;  // Utilisation de "!" ici aussi pour affirmer que la valeur existe
    this.getSchool();
    this.getDanceCategories();  // Charger les catégories de danse disponibles
  }

  // Charger les catégories de danse disponibles
  getDanceCategories(): void {
    this.danceService.getAllDanceCategories().subscribe({
      next: (categories: DanceCategory[]) => {
        this.danceCategories = categories;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des catégories de danse', err);
      }
    });
  }

  // Récupérer les informations de l'école de danse par ID
  getSchool(): void {
    this.danceService.getDanceSchoolById(this.schoolId).subscribe({
      next: (school: DanceSchool) => {
        this.schoolForm.patchValue(school);  // Pré-remplir le formulaire avec les données de l'école
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'école', err);
      }
    });
  }

  // Soumettre le formulaire pour mettre à jour l'école
  onSubmit(): void {
    if (this.schoolForm.valid) {
      const updatedSchool: DanceSchool = this.schoolForm.value;
      this.danceService.updateDanceSchool(this.schoolId, updatedSchool).subscribe({
        next: () => {
          this.router.navigate(['crud/school-list']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour de l\'école', err);
        }
      });
    } else {
      console.error('Le formulaire n\'est pas valide');
    }
  }
}
