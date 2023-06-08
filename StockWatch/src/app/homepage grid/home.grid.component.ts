import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangeDetectorRef, Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Stock } from '../models/stock';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { CreateWatchlistComponent } from '../dialog/create-watchlist/create-watchlist.component';

@Component({
  selector: 'app-homegrid',
  templateUrl: './home.grid.component.html',
  styleUrls: ['./home.grid.component.css'],
})
export class HomeGridComponent {
  displayedColumns: string[] = ['select', 'company', 'symbol', 'price', 'stockChange', 'wallStreetRating', 'marketCap'];
  dataSource:any;
  selection = new SelectionModel<Stock>(true, []);

  constructor(private route: ActivatedRoute, private httpClient: HttpService, private dialog: MatDialog, private snackBar: MatSnackBar,private ref: ChangeDetectorRef, private r : Router) {
    this.route.params.subscribe(params => {
      this.populateGrid();
    });
  }

  ngOnInit() {
    this.populateGrid();
  }

  ngOnChanges() {
console.log("aasa")
  }

  populateGrid() {
    this.httpClient.get('api/stocks').subscribe({
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

  createWatchList() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateWatchlistComponent, {
      data: this.selection.selected,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success') {
        this.selection.clear()
        this.snackBar.open("Watchlist Created successfully", undefined, {duration: 2000});
        this.ref.detectChanges()
        this.r.navigateByUrl("/home");
      } else if (result) {
        this.snackBar.open(result, undefined, {duration: 2000});
      }
    });
  }

  addToWatchList() {
    console.log('gj')
  }
}
