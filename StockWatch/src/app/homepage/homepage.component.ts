import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { WatchListResponse } from '../models/watchlist.response';
import { NavigationEnd, Router } from '@angular/router';
import { Stock } from '../models/stock';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {

  watchlists:WatchListResponse[] = [];
  selectedWatchlistId:any;
  searchQuery:any = '';
  constructor(private httpClient: HttpService, private router: Router, private homePageService: HomepageService) {
  }

  // click event listener added to retrieve the elements by name & Id 
  ngOnInit() {
    document.getElementsByClassName("ul")[0]?.addEventListener('click', (e)=> {
      document.getElementById("details")?.removeAttribute("open")
    })
    this.fetchWatchlists();
  }

  // retrieves watchlist data from the API
  fetchWatchlists(): void {
    this.httpClient.get('api/watchlist').subscribe({
      next: (res: WatchListResponse[]) => {
        this.watchlists = res;
      },
      error: (e) => {
        console.log("Error while fetching watchlists");
      },
    });

  }

  searchStocks() { // initiates the stock search from the homepagecomponent
    this.homePageService.subject.next(this.searchQuery);
  }

}
