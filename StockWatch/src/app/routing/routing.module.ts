import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../login/login.component';
import { WatchlistsComponent } from '../watchlists/watchlists.component';
import { RegistrationComponent } from '../registration/registration.component';

// https://angular.io/guide/router#displaying-a-404-page
// Documentation for using router
const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'watchlists', component: WatchlistsComponent },
  { path: 'watchlists/watchlist1', component: WatchlistsComponent },
  { path: 'watchlists/watchlist2', component: WatchlistsComponent },
  { path: 'watchlists/watchlist3', component: WatchlistsComponent },
  { path: 'register', component: RegistrationComponent },
  // { path: '404', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}