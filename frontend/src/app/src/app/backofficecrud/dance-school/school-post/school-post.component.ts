import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DanceCategory } from '../../../models/dance-category.model';
import { DanceSchool } from '../../../models/dance-school.model';
import { DanceService } from '../../../services/dance.service';

@Component({
  selector: 'app-school-post',
  templateUrl: './school-post.component.html',
  styleUrls: ['./school-post.component.css']
})
export class SchoolPostComponent implements OnInit {
  schoolForm: FormGroup;
  danceCategories: DanceCategory[] = []; // Liste des catégories disponibles

  constructor(
    private fb: FormBuilder,
    private danceService: DanceService,
    private router: Router
  ) {
    // Initialisation du formulaire avec un champ danceCategoryId
    this.schoolForm = this.fb.group({
      name: ['', Validators.required],
      localisation: ['', Validators.required],
      openday: ['', Validators.required],
      closeday: ['', Validators.required],
      opentime: ['', Validators.required],
      closetime: ['', Validators.required],
      danceCategoryId: [null, Validators.required] // Champ pour la catégorie
    });
  }

  ngOnInit(): void {
    // Récupérer les catégories de danse disponibles
    this.danceService.getAllDanceCategories().subscribe({
      next: (categories) => {
        this.danceCategories = categories;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des catégories', err);
      }
    });
  }
  onReturn(): void {
    this.router.navigate(['crud/school-list']); // Redirection vers la liste des écoles
  }

  onSubmit(): void {
    if (this.schoolForm.valid) {
        // Récupérer l'ID de la catégorie de danse sélectionnée
        const danceCategoryId = this.schoolForm.value.danceCategoryId;

        // Créer une instance de DanceCategory avec l'ID et un nom par défaut
        const danceCategory = new DanceCategory(danceCategoryId, ''); // Nom vide ou par défaut

        // Création de l'objet DanceSchool à partir du formulaire
        const newSchool: DanceSchool = {
            ...this.schoolForm.value,
            danceCategory: danceCategory // Associer la catégorie de danse
        };

        // Envoi au backend via le service
        this.danceService.createDanceSchool(newSchool).subscribe({
            next: () => {
                this.router.navigate(['crud/school-list']); // Redirection vers la liste des écoles
            },
            error: (err) => {
                console.error('Erreur lors de la création de l\'école', err);
            }
        });
    } else {
        console.error('Le formulaire n\'est pas valide');
    }
}
}
