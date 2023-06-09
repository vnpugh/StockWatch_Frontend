// Adding an interface to add stocks to the watchlist by Id or ticker symbol.
// Neccessary for type-checking.
//https://angular.io/tutorial/first-app/first-app-lesson-04#conceptual-preview-of-interfaces

export interface AddToWatchlist {
  watchListId: number
  stockSymbols: string[]
}


