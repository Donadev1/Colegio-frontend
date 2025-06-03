import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatIcon, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarVisible = false;

  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    window.location.href = '/home';

    
  }
  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }
}
