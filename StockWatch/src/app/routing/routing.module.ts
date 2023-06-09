import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../login/login.component';
import { WatchlistsComponent } from '../watchlists/watchlists.component';
import { RegistrationComponent } from '../registration/registration.component';
import { HomeGridComponent } from '../homepage grid/home.grid.component'; //custom component
import { LearnComponent } from '../learn/learn.component';

// https://angular.io/guide/router#displaying-a-404-page
// Documentation for using router
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomepageComponent,
  
  children:[
    {path: 'watchlist/:watchlistId', component: WatchlistsComponent, pathMatch:'full' },
    {path: 'home', component: HomeGridComponent }]},
    { path: '', redirectTo: 'learn', pathMatch: 'full' },
    { path: 'learn', component: LearnComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];

// the router should reload the component when navigating to the same URL
@NgModule({ 
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class RoutingModule {}
