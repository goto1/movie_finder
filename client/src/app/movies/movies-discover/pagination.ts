import { Movie } from '../models/movie';

export abstract class Pagination {
  public allMovies;
  public showMovies: Movie[];
  protected page: number = 0;

  public nextPage(): void {
    if (this.page < this.allMovies.length - 1) {
      this.page++;
    }
    this.getMoviesFromPage(this.page);
  }

  public prevPage(): void {
    if (this.page > 0) {
      this.page--;
    }
    this.getMoviesFromPage(this.page);
  }
  
  protected getMoviesFromPage(number: number): void {
    this.showMovies = this.allMovies[number];
  }
}