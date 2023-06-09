import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { HomeGridComponent } from './homepage grid/home.grid.component';
import {MatSelectModule} from '@angular/material/select';
import { CreateWatchlistComponent } from './dialog/create-watchlist/create-watchlist.component';
import { AddtoWatchlistComponent } from './dialog/addto-watchlist/addto-watchlist.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { LearnComponent } from './learn/learn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WatchlistsComponent,
    LoginComponent,
    RegistrationComponent,
    HomeGridComponent,
    CreateWatchlistComponent,
    AddtoWatchlistComponent,
    LearnComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([ { path: '', component: HomepageComponent }]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})

export class AppModule { }

