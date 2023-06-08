import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Stock } from '../models/stock';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-watchlists',
  templateUrl: './watchlists.component.html',
  styleUrls: ['./watchlists.component.css'],
})
export class WatchlistsComponent {
  displayedColumns: string[] = ['select', 'company', 'symbol', 'price', 'stockChange', 'wallStreetRating', 'marketCap'];
  dataSource:any;
  selection = new SelectionModel<Stock>(true, []);
  listName:any;

  constructor(private route: ActivatedRoute, private httpClient: HttpService) {
    this.route.params.subscribe(params => {
      this.populateGrid(params['watchlistId'])
    });
  }

  populateGrid(watchlistId: number) {
    this.httpClient.get('api/watchlist/stocks', {id: watchlistId}).subscribe({
      next: (res: Stock[]) => {
        this.dataSource = new MatTableDataSource<Stock>(res);
      },
      error: (e) => {
        console.log("Error while fetching stocks");
      },
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Stock): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.stockId + 1}`;
  }
}
