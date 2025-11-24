import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isOpen = false;
  modalTitle = '';
  modalDescription = '';
  currentImage = '';
  programas: string[] = [];

  abrirModalZonas() {
    this.isOpen = true;
    this.modalTitle = 'Programas Ofertados ';
    this.modalDescription = 'Descripción completa de los programas.';
    this.currentImage = 'imagenfunsema.png';
    this.programas = [
      'Tecnico laboral en Administracion en Salud',
      'Tecnico laboral en Servicios Farmaceuticos',
      'Tecnico laboral en Clinica Veterinaria',
      'Tecnico laboral en Auxiliar de Enfermeria',
    ];
  }

  abrirModalBecas() {
    this.isOpen = true;
    this.modalTitle = 'Programas Ofertados';
    this.modalDescription = 'Descripción completa de los programas.';
    this.currentImage = 'imagenceco.png';
    this.programas = [
      'Atencion Integral a la Primera Infancia',
      'Sistemas Informaticos y Desarrollo de Software',
      'Transito, Transporte y Seguridad Vial',
      'Mercadeo y Ventas',
      'Seguridad Industrial y ocupacional',
      'Asistente Administrativo, Conttable y Financiero',
      'Coordinacion logistica y Operaciones Portuarias',
    ];
  }

  cerrarModal() {
    this.isOpen = false;
  }
}
