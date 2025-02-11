import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tango',
  imports: [],
  templateUrl: './tango.component.html',
  styleUrl: './tango.component.scss',
})
export class TangoComponent {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('Tango Component loaded');
  }
}
