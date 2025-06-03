import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../../../shared/interfaces/Login.interface';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private ApiUrl:string;
private AuthUrl:string;

  constructor(private http: HttpClient, private router: Router) {
    this.ApiUrl = environment.apiUrl;
    this.AuthUrl ='auth/login';

  }
  
  login(login:Login): Observable<{token:string; rol:string}> {
    return this.http.post<{token:string; rol:string}>(`${this.ApiUrl}${this.AuthUrl}`, login);
  }
  guardarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  guardarRol(rol: string): void {
    localStorage.setItem('rol', rol);
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  obtenerRol(): string | null {
    return localStorage.getItem('rol');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigate(['/home']), {replaceUrl: true};
  }

  estaAutenticado(): boolean {
    return !!this.obtenerToken();
  }
}
