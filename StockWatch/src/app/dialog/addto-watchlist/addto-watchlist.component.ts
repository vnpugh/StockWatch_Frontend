import { CreateWatchlistResponse } from './../../models/create-watchlist.response';
import { CreateWatchlist } from './../../models/create-watchlist';
import { HttpService } from './../../services/http.service';
import { Component, Inject } from '@angular/core';
import { HomeGridComponent } from 'src/app/homepage grid/home.grid.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Stock } from 'src/app/models/stock';
import { WatchListResponse } from 'src/app/models/watchlist.response';
import { AddToWatchlist } from 'src/app/models/add-to-watchlist.request';

@Component({
  selector: 'app-addto-watchlist',
  templateUrl: './addto-watchlist.component.html',
  styleUrls: ['./addto-watchlist.component.css']
})

/**
* AddtoWatchListComponent has three properties: listId, error, & watchlists.
* Referencing the dialog component to perform actions relating to the dialog.
* The user can cancel or add to their watchlist when the buttons are clicked (binding).
*/ 
export class AddtoWatchlistComponent {
  listId:number = -1;
  error:string = ''
  watchlists: WatchListResponse[] = []
  constructor(
    public dialogRef: MatDialogRef<HomeGridComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Stock[], private httpService: HttpService //make requests to the server
  ) {
    this.fetchWatchlists();
  }

  /**
* Using FetchWatchLists to retrieve user created watchlists from the server (asynchronous ).
* Error is thrown if the watchlist cannot be retrieved.
*/ 

  fetchWatchlists(): void {
    this.httpService.get('api/watchlist').subscribe({
      next: (res: WatchListResponse[]) => {
        this.watchlists = res;
      },
      error: (e) => {
        console.log("Error while fetching watchlists");
      },
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

    /**
* Using addToWatchlist method to represent the logic to add stocks to a watchlist.
* Subscribe function handles the responses (next & error).
* Error is thrown if the watchlist cannot be saved.
*/ 
  addToWatchlist(): void {
    let stockSymbols = this.data?.map(stock=>stock.symbol)
    let addToWatchlistReq: AddToWatchlist = {watchListId: this.listId, stockSymbols: stockSymbols};
    this.httpService.post('api/watchlist/addStocks', addToWatchlistReq).subscribe({
      next: (res: CreateWatchlistResponse) => {
        this.error = '';   //executed when the request is successful
        this.dialogRef.close('success');
      },
      error: (e) => {
        this.error = '';
        this.dialogRef.close(e.error?.message ? e.error?.message: 'Error occured while saving watchlist');
      },
    });

  }
}
