import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueensComponent } from './pages/queens/queens.component';
import { TangoComponent } from './pages/tango/tango.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tango', component: TangoComponent },
  { path: 'queens', component: QueensComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
