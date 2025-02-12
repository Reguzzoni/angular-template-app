import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // Assicurati che questo percorso sia corretto
})
export class SidebarComponent {
  constructor(private router: Router) {}

  onLinkClick(page: string) {
    console.log(`Link cliccato: ${page}`);
    this.router.navigate([page]);
  }
}
