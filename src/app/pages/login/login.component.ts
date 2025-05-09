import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import{FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'; 
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Login } from '../../shared/interfaces/Login.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [NavbarComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  Loginform = new FormGroup ({
    correo: new FormControl('', [Validators.email,Validators.required]),
  contrasena: new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
    Validators.minLength(8)
  ])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  get correo() {
    return this.Loginform.get('correo');
  }
  get contrasena() {
    return this.Loginform.get('contrasena');
  }
  onSubmit() {

    if (this.Loginform.valid) {
      const loginData: Login = this.Loginform.value as Login;
      this.authService.login(loginData).subscribe({
        next:(response: any)=>{
          this.authService.guardarToken(response.token);
          this.authService.guardarRol(response.rol);
          
         if (response.rol === 'Administrador') {
            this.router.navigate(['/Administrador']);
            Swal.fire({
              title: 'Bienvenido Administrador',
              text: 'Has iniciado sesión correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            })
        }else if (response.rol === 'Estudiante') {
            this.router.navigate(['/Estudiante']);
        }else if (response.rol === 'Docente') {
            this.router.navigate(['/Docente']); 
        }else if (response.rol === 'Acudiente') {
            this.router.navigate(['/Acudiente']);
        }else {
          this.router.navigate(['/']);
        }
          console.log('Login exitoso');
        
        this.Loginform.reset();
        },
        error:(error: any)=>{
          console.error('Error en el login', error);
          alert('Error en el login');
        }
    });
  
  } else {
      console.log('Formulario inválido');
    }
    console.log(this.Loginform.errors);
    console.log(this.correo?.errors);
    console.log(this.contrasena?.errors);
  }
  onReset() {
    this.Loginform.reset();
  }
  
}
