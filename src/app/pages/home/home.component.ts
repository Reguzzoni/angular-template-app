import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('home Component loaded');
  }
}
