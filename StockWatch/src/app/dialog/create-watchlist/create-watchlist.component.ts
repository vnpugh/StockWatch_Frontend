import { CreateWatchlistResponse } from './../../models/create-watchlist.response';
import { CreateWatchlist } from './../../models/create-watchlist';
import { HttpService } from './../../services/http.service';
import { Component, Inject } from '@angular/core';
import { HomeGridComponent } from 'src/app/homepage grid/home.grid.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-create-watchlist',
  templateUrl: './create-watchlist.component.html',
  styleUrls: ['./create-watchlist.component.css']
})
export class CreateWatchlistComponent {
  listName:string='';
  description:string = ''
  error:string = ''
  constructor(
    public dialogRef: MatDialogRef<HomeGridComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Stock[], private httpService: HttpService
  ) {}

  onNoClick(): void {
    console.log(this.data)
    this.dialogRef.close();
  }

  createWatchlist(): void {
    if(this.listName == null || this.listName == '') {
      this.error = 'Please input watchlist name';
      return;
    }
    let stockIds = this.data?.map(stock=>stock.stockId)
    let createWatchlistReq: CreateWatchlist = {listName: this.listName, description: this.description, stockIds: stockIds};
    this.httpService.post('api/watchlist/create', createWatchlistReq).subscribe({
      next: (res: CreateWatchlistResponse) => {
        this.error = '';
        this.dialogRef.close('success');
      },
      error: (e) => {
        this.error = '';
        this.dialogRef.close(e.error?.message ? e.error?.message: 'Error occured while saving watchlist');
      },
    });

  }
}
