import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { Learn } from '../models/learn';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})

export class LearnComponent {
  displayedColumns: string[] = ['Term', 'Definition'];
  dataSource: Learn[] = terms;

  constructor(private router: Router) {} 

  navigateToLearnPage() {
    this.router.navigate(['/learn']);
  }
}

  const terms: Learn[] = [
    {
      Term: 'Aggregate',
      Definition: 'some term',
    },
    {
      Term: 'Aggregate',
      Definition: 'some term',
    },
    {
      Term: 'Aggregate',
      Definition: 'some term',
    },
    {
      Term: 'Aggregate',
      Definition: 'some term',
    },
    {
      Term: 'Aggregate',
      Definition: 'some term',
    },
  ];





