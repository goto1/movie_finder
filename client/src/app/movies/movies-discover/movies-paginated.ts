import { Movie } from '../models/movie';

export class MoviesPaginated {
  private movies;
  private page: number;
  private pageCount: number;

  constructor(movies) {
    this.movies = movies;
    this.page = 0;
    this.pageCount = movies.length - 1;
  }

  public nextPage(): void {
    this.page++;
  }

  public previousPage():void {
    this.page--;
  }

  public hasPrevious(): boolean {
    return this.page > 1;
  }

  public hasNext(): boolean {
    return this.page < this.pageCount;
  }

  public getCurrentPageContent(): Movie[] {
    return this.movies[this.page];
  }
}