import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DanceCategory } from '../../../models/dance-category.model';
import { DanceService } from '../../../services/dance.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: DanceCategory[] = [];

  constructor(private danceService: DanceService, private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.danceService.getAllDanceCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des catégories', err);
      }
    });
  }

  deleteCategory(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      this.danceService.deleteDanceCategory(id).subscribe({
        next: () => {
          this.getCategories();
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de la catégorie', err);
        }
      });
    }
  }

  editCategory(id: number) {
    this.router.navigate([`crud/category-update/${id}`]);
  }

  // Méthode pour naviguer vers le formulaire de création de catégorie
  goToCategoryPost() {
    this.router.navigate(['crud/category-post']);
  }
}
