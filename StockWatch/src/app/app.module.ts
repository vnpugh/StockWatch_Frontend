import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WatchlistsComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
