
import { LoginResponse } from '../models/login.response';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { HttpService } from '../services/http.service';
import { Register } from '../models/register';
import { RegisterResponse } from '../models/register.response';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  email!: string;
  password!: string;
  errorMessage!: string;
  name!: string;

  constructor(private router: Router, private httpClient: HttpService) {}
  register(): void {
    let registrationRequest: Register = {
      email: this.email,
      password: this.password,
      firstName: this.name,
    };

    if (!this.email || !this.password || !this.name) {
      this.errorMessage = 'The name/email/password cannot be empty';
      return;
    }
    this.httpClient
      .post('api/auth/users/register', registrationRequest)
      .subscribe({
        next: (res: RegisterResponse) => {
          this.errorMessage = '';
          // Navigate to the desired page after successful registration.
          this.router.navigate(['/login']);
        },
        error: (e) => {
          // Show error message for invalid credentials
          this.errorMessage = e.error?.message? e.error?.message: 'Invalid email or password';
        },
      });
  }
}

