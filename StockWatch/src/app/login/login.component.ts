import { LoginResponse } from './../models/login.response';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(private router: Router, private httpClient: HttpService) {}
  login(): void {
    let login: Login = { email: this.email, password: this.password };

    this.httpClient.post('api/auth/users/login', login).subscribe({
      next: (res: LoginResponse) => {
        localStorage.setItem('jwt', res.accessToken);
        this.errorMessage = '';
        // Navigate to the desired page after successful login
        this.router.navigate(['/home']);
      },
      error: (e) => {
        // Show error message for invalid credentials
        this.errorMessage = 'Invalid email or password';
      },
    });
  }
}
