import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';

export const routes: Routes = [
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
    path: 'contactenos',
    component: ContactenosComponent,
  },

  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full',
  },
];
