import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // Assicurati che questo percorso sia corretto
})
export class SidebarComponent {
  onLinkClick(page: string) {
    console.log(`Link cliccato: ${page}`);
  }
}
