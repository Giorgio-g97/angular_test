import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ServiziComponent } from './servizi/servizi.component';

export const routes: Routes = [
  // E' un array di oggetti
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: ChiSiamoComponent,
  },
  {
    path: 'contact-us',
    component: ContattiComponent,
  },
  {
    path: 'services',
    component: ServiziComponent,
  },
];
