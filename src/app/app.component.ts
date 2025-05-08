import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-colegio';

}
