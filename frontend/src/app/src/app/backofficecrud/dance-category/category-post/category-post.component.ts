import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DanceCategory } from '../../../models/dance-category.model';
import { DanceService } from '../../../services/dance.service';

@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css']
})
export class CategoryPostComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private danceService: DanceService,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const category: DanceCategory = this.categoryForm.value;
      this.danceService.createDanceCategory(category).subscribe({
        next: () => {
          // Mise à jour de la navigation pour rediriger vers la liste des catégories
          this.router.navigate(['crud/category-list']);
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de la catégorie', err);
        }
      });
    } else {
      console.error('Le formulaire n\'est pas valide');
    }
  }

  // Fonction pour revenir à la liste des catégories
  goBack(): void {
    this.router.navigate(['crud/category-list']);
  }
}
