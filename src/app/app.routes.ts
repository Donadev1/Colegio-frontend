import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { AuthGuard } from './core/guards/administrador.guard';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';

export const routes: Routes = [
   

    {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'    
    },

    {
        path: 'home',
        component:  HomeComponent,
    },

    {
        path: 'login',
        component:  LoginComponent,
    },

    {
        path:'Administrador',
        component: AdministradorComponent,
        canActivate: [AuthGuard],

    },

    {
        path:'**',
        component: ErrorComponent,
        pathMatch: 'full'
    }
];
