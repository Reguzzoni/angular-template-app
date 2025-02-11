import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa il modulo di routing

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule], // Assicurati che AppRoutingModule sia importato qui
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
