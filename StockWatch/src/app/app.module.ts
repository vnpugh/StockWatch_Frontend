import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WatchlistsComponent,
    LoginComponent
    
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
