import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router'; // Importa il Router

@Component({
  selector: 'app-queens',
  templateUrl: './queens.component.html',
  styleUrls: ['./queens.component.css'],
})
export class QueensComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    console.log('QueensComponent loaded');
    this.apiService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log('Posts:', this.posts);
      },
      (error) => {
        console.error('Errore nel recupero dei dati:', error);
      }
    );
  }

  navigateToTango() {
    this.router.navigate(['/tango']);
  }
}
