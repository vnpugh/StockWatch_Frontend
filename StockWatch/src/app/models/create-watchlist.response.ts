import { RegisterResponse } from "./register.response"
import { Stock } from "./stock"

// This interface is needed to receive the watchlist data after it is created.
// handles the response data correctly
export interface CreateWatchlistResponse {
  watchListId: number
  listName: string
  dateCreated: string
  description: string
  user: RegisterResponse
  stocks: Stock[]
}

