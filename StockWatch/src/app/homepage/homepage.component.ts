import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { WatchListResponse } from '../models/watchlist.response';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {

  watchlists:WatchListResponse[] = [];

  constructor(private httpClient: HttpService) {

  }

  ngOnInit() {
    document.getElementsByClassName("ul")[0]?.addEventListener('click', (e)=> {
      document.getElementById("details")?.removeAttribute("open")
    })
    this.fetchWatchlists();
  }

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

}
