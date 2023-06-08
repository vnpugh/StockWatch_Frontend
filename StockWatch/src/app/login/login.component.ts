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

// user must enter a unique email and password to login

export class LoginComponent { 
  email!: string;
  password!: string;
  errorMessage!: string;


  constructor(private router: Router, private httpClient: HttpService) {}
  login(): void {
    let login: Login = { email: this.email, password: this.password };

    this.httpClient.post('api/auth/users/login', login).subscribe({
      next: (res: LoginResponse) => {
        // access key is saved in the browser's storage
        localStorage.setItem('jwt', res.accessToken); 
        this.errorMessage = '';
        // Navigate to the homepage after successful login
        this.router.navigate(['/home']);
      },
      error: (e) => {
        // Show error message for invalid credentials
        this.errorMessage = e.error?.message? e.error?.message: 'Invalid email or password';
      },
    });

  }

}
