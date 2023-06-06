import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../login/login.component';
import { WatchlistsComponent } from '../watchlists/watchlists.component';

// https://angular.io/guide/router#displaying-a-404-page
// Documentation for using router
const routes: Routes = [
    { path: 'watchlists', component: WatchlistsComponent },
    // { path: '404', component: PageNotFoundComponent },
    { path: '**', component: HomepageComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class RoutingModule {}