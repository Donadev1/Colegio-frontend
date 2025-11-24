import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() modalTitle = '';
  @Input() modalDescription = '';
  @Input() currentImage = '';
  @Input() programas: string[] = [];

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
