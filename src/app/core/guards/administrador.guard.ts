import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService:AuthService ) {}

  canActivate(): boolean {
   if(this.authService.estaAutenticado()){
    return true;
   }else{
    this.router.navigate(['/home']);
    return false;
   }
  }
}