import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SegundaComponent } from './segunda/segunda.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'segunda', component: SegundaComponent },
];
