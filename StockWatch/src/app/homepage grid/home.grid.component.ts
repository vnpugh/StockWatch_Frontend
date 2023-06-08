import { MatSnackBar } from '@angular/material/snack-bar'; // needed to display small messages in the app
import { ChangeDetectorRef, Component } from '@angular/core'; // needed to detect changes in the data and then the interface will be updated.
import {MatTableDataSource} from '@angular/material/table'; // needed to serve as a data source for the table
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Stock } from '../models/stock';
import { SelectionModel } from '@angular/cdk/collections'; // needed to help manage the selection of items in the table 
import { MatDialog } from '@angular/material/dialog'; // needed to control the dialog boxes
import { CreateWatchlistComponent } from '../dialog/create-watchlist/create-watchlist.component';
import { AddtoWatchlistComponent } from '../dialog/addto-watchlist/addto-watchlist.component';
import { HomepageService } from '../homepage/homepage.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-homegrid',
  templateUrl: './home.grid.component.html',
  styleUrls: ['./home.grid.component.css'],
})
export class HomeGridComponent { //columns for grid to be displayed on the homepage
  displayedColumns: string[] = ['select', 'company', 'symbol', 'price', 'stockChange', 'wallStreetRating', 'marketCap'];
  dataSource:any;
  selection = new SelectionModel<Stock>(true, []);
 
  // These paramaters are passed through the constructor to route the requests,
  // display the dialog boxes/notifications, & communicate with the homepage.
  constructor(private route: ActivatedRoute, private httpClient: HttpService, 
    private dialog: MatDialog, private snackBar: MatSnackBar, private homePageService: HomepageService) {
    this.route.params.subscribe(params => {
      this.populateGrid();
    });
    this.homePageService.subject.subscribe(query=> {
      this.searchStocks(query);
    }) // subject observable allows the user to perform a search query.
  }

  ngOnInit() {
    this.populateGrid(); // used to populate the grid with data
  }


 /** Needed to populate the grid with data when a GET request is made to retrieve stock information. */
 /** The subscribe observable handles the response. */

  populateGrid() {
    this.httpClient.get('api/stocks').subscribe({
      next: (res: Stock[]) => {    //executed when the HTTP request is successful
        this.dataSource = new MatTableDataSource<Stock>(res); // response data is received as an argument
      },
      error: (e) => { //error while fetching the stocks
        this.snackBar.open("Error while fetching stocks", undefined, {duration: 2000});
      },
    });
  }

  /** checks if the number of selected elements matches the total number of rows. */
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

  /** A label will be generated for the checkboxes in the grid. */
  checkboxLabel(row?: Stock): string {
    if (!row) { // all stocks will be returned if the select all checkbox is chosen
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    } // user can also deselect the checkall box
     // the specific row is called for a check box in row 1, for example
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.stockId + 1}`;
  }

  createWatchList() {
    this.openDialog(); // dialog box opens when the user clicks on create watchlist button
  }

  // https://material.angular.io/components/dialog/api

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateWatchlistComponent, {
      data: this.selection.selected,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success') {
        this.selection.clear()
        this.snackBar.open("Watchlist Created successfully", undefined, {duration: 2000});
        location.reload()
      } else if (result) {
        this.snackBar.open(result, undefined, {duration: 2000});
      }
    });
  }

  //<!--  user can add a stock to their watchlist -->
  addToWatchList() {
    const dialogRef = this.dialog.open(AddtoWatchlistComponent, {
      data: this.selection.selected,
    });

    dialogRef.afterClosed().subscribe(result => { 
      if(result == 'success') {
        this.selection.clear()
        this.snackBar.open("Stocks added to Watchlist successfully", undefined, {duration: 2000});
        location.reload()
      } else if (result) {
        this.snackBar.open(result, undefined, {duration: 2000});
      }
    });
  }

  //<!--  user can search for a stock by the company name or symbol -->
  searchStocks(query: string) {
    this.httpClient.get('api/stocks/companyOrSymbol', {query: query}).subscribe({
      next: (res: Stock[]) => {
        this.dataSource = new MatTableDataSource<Stock>(res);
      },
      error: (e) => {
        this.snackBar.open("Error while fetching stocks", undefined, {duration: 2000});
      },
    });
  }
}
