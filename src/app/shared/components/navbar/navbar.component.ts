import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // Controla si el menú móvil está abierto o cerrado
  isMenuOpen: boolean = false;

  // Método para abrir/cerrar menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
