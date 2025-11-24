import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../shared/interfaces/user.interface';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit-userdialog',
  templateUrl: './edit-userdialog.component.html',
  imports:[ReactiveFormsModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatIconModule]
})
export class EditUserdialogComponent implements OnInit {
  form: FormGroup;
  rolesDisponibles: string[] = ['Administrador', 'Docente', 'Estudiante'];

  constructor(
    public dialogRef: MatDialogRef<EditUserdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombre: [data.nombre, Validators.required],
      correo: [data.correo, [Validators.required, Validators.email]],
      rol: [data.rol, Validators.required],
    });
  }

  ngOnInit(): void {}

  guardarCambios(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
