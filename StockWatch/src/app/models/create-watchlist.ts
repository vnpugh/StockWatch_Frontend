
// helps to validate and and manage the data when a list is created
export interface CreateWatchlist {
  listName: string;
  description:string; // optional
  stockIds: number[];
}
