import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Usuario } from '../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.apiUrl}users`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  crearUsuario(data: Usuario): Observable<any> {
    return this.http.post(this.apiUrl, data, { headers: this.getAuthHeaders() });
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  obtenerUsuarioPorId(id_usuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id_usuario}`, { headers: this.getAuthHeaders() });
  }

  actualizarUsuario(id_usuario: number, data: Partial<Usuario>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id_usuario}`, data, { headers: this.getAuthHeaders() });
  }

  eliminarUsuario(id_usuario: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_usuario}`, { headers: this.getAuthHeaders() });
  }
}
