import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanceCategory } from '../../../models/dance-category.model';
import { DanceService } from '../../../services/dance.service';


@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId!: number; // Utilisation de l'opérateur "!" pour indiquer que cette valeur sera initialisée plus tard.

  constructor(
    private fb: FormBuilder,
    private danceService: DanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // L'ID de la catégorie est récupéré à partir des paramètres d'URL
    this.categoryId = +this.route.snapshot.paramMap.get('id')!; // Le "!" indique que l'ID sera défini ici
    this.getCategory();
  }

  getCategory() {
    this.danceService.getDanceCategoryById(this.categoryId).subscribe({
      next: (category) => {
        this.categoryForm.setValue({ name: category.name });
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de la catégorie', err);
      }
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const updatedCategory: DanceCategory = this.categoryForm.value;
      this.danceService.updateDanceCategory(this.categoryId, updatedCategory).subscribe({
        next: () => {
          this.router.navigate(['crud/category-list']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour de la catégorie', err);
        }
      });
    }
  }
}