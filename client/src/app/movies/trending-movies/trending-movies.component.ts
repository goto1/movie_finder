import { Component, OnInit }  from '@angular/core';

import { Movie }              from './movie';

import { TrendingMoviesService } from './trending-movies.service';

@Component({
  selector: 'trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: [ './trending-movies.component.sass' ]
})
export class TrendingMoviesComponent implements OnInit {
  public errorMessage: string;
  public moviesShown: Movie[];

  private allMovies: Movie[];
  private moviesExtracted: any[] = [];
  private pageNumber: number = 0;
  
  constructor(private trendingMoviesService: TrendingMoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.trendingMoviesService.getMovies().subscribe(
      movies => {
        this.allMovies = movies;
        this.sortMoviesByPages();
        this.getMoviesFromPage(this.pageNumber);
      },
      error => this.errorMessage = <any>error
    );
  }

  private sortMoviesByPages(): void {
    let tempArr: Movie[] = [];
    let counter: number = 1;
    
    for (let i = 0; i < this.allMovies.length; i++) {
      tempArr.push(this.allMovies[i]);
      if (counter % 5 === 0) {
        this.moviesExtracted.push(tempArr);
        tempArr = [];
      }
      counter++;
    }
  }

  private getMoviesFromPage(number: number): void {
    this.moviesShown = this.moviesExtracted[number];
  }

  public nextPage(): void {
    if (this.pageNumber < this.moviesExtracted.length - 1) {
      this.pageNumber++;
    }
    this.getMoviesFromPage(this.pageNumber);
  }

  public previousPage(): void {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      console.log(this.pageNumber);
    }
    this.getMoviesFromPage(this.pageNumber);
  }

}