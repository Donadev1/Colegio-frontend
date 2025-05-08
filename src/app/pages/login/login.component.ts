import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import{FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms' 
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [NavbarComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  Loginform = new FormGroup ({
    CorreoElectronico: new FormControl('', [Validators.email,Validators.required]),
  Password: new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[a-z])(?=:*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
    Validators.minLength(8)
  ])
  });

  get CorreoElectronico() {
    return this.Loginform.get('CorreoElectronico');
  }
  get Password() {
    return this.Loginform.get('Password');
  }
  onSubmit() {

    if (this.Loginform.valid) {
      console.log('Formulario enviado', this.Loginform.value);
    } else {
      console.log('Formulario inválido');
    }
  }
  onReset() {
    this.Loginform.reset();
  }
}
