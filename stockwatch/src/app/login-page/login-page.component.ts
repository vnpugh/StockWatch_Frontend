import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  email: string = '';
  password: string = '';
  isEmailValid: boolean = true;
  error: any = null;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService
      .errorSubject
      .subscribe((errorMessage: any) => {
        this.error = errorMessage;
      });
  }

  validateemail(): void {
    const pattern = RegExp(/^[\w-.]*$/);
    if (pattern.test(this.email)) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  }

  onKey(event: any, type: string) {
    if (type === 'email') {
      this.email = event.target.value;
      this.validateemail();
    } else if (type === 'password') {
      this.password = event.target.value;
    }
  }

  onSubmit() {
    if (this.isEmailValid) {
      this.loginService
        .login(this.email, this.password);
    }
  }


}
