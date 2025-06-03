import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { AuthGuard } from './core/guards/administrador.guard';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';

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
        path:'contactenos',
        component:ContactenosComponent
    },

    {
        path:'**',
        component: ErrorComponent,
        pathMatch: 'full'
    }
];
