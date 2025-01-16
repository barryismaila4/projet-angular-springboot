import { Component, OnInit } from '@angular/core';
import { DanceSchool } from '../../../models/dance-school.model';
import { DanceService } from '../../../services/dance.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: DanceSchool[] = [];

  constructor(private danceService: DanceService) {}

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(): void {
    this.danceService.getAllDanceSchools().subscribe({
      next: (data) => {
        this.schools = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des écoles', err);
      }
    });
  }

  deleteSchool(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette école ?')) {
      this.danceService.deleteDanceSchool(id).subscribe({
        next: () => {
          this.getSchools(); // Recharger la liste des écoles
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de l\'école', err);
        }
      });
    }
  }

}
