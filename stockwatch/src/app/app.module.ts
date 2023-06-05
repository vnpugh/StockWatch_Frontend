import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { RouterModule, Routes } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent,
    HomePageComponent,
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule, RouterModule, HomePageComponent, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
