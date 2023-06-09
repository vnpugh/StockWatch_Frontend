import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {


  constructor(private router: Router) {}
  
  navigateToLearnPage() {
    this.router.navigate(['/learn']);
  }

}
