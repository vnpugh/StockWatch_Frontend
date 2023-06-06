import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  errorMessage!: string;


  constructor(private router: Router) {}
  login(): void {
    // Perform validation
    if (this.email === 'email100@gmail.com' && this.password === 'password100') {

      this.errorMessage = '';

      // Navigate to the desired page after successful login
      this.router.navigate(['/home']);
    } else {
      // Show error message for invalid credentials
      this.errorMessage = 'Invalid email or password';
    }
  }

}
