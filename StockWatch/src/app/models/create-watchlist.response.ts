import { RegisterResponse } from "./register.response"
import { Stock } from "./stock"

export interface CreateWatchlistResponse {
  watchListId: number
  listName: string
  dateCreated: string
  description: string
  user: RegisterResponse
  stocks: Stock[]
}
