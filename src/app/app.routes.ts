import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';

export const routes: Routes = [
   

    {
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'    
    },

    {
        path: 'login',
        component:  LoginComponent,
    },

    {
        path:'Administrador',
        component: AdministradorComponent
    },

    {
        path:'**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
