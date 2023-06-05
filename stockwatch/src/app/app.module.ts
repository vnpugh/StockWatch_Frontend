import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { RegisterPageComponent } from './register-page/register-page.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
