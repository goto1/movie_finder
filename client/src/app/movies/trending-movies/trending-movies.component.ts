import { 
  Component, OnInit, 
  ElementRef, AfterViewInit } from '@angular/core';

import { Movie } from './movie';

import { TrendingMoviesService } from './trending-movies.service';


@Component({
  selector: 'trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: [ './trending-movies.component.sass' ]
})
export class TrendingMoviesComponent implements OnInit, AfterViewInit {
  public trendingMovies: Movie[];
  public errorMessage: string;
  private trendingMoviesElement: any;
  
  constructor(
    private elementRef: ElementRef,
    private trendingMoviesService: TrendingMoviesService ) { }

  ngOnInit(): void {
    this.getTrendingMovies();
  }

  ngAfterViewInit(): void {
    this.trendingMoviesElement =
      this.elementRef.nativeElement.querySelector('.trending-movies');
  }

  getTrendingMovies(): void {
    this.trendingMoviesService.getTrendingMovies().subscribe(
      movies => this.trendingMovies = movies,
      error => this.errorMessage = <any>error
    );
    setTimeout(() => {
      console.log(JSON.stringify(this.trendingMovies));
    }, 1000);
    
  }

  public scrollTrendingMoviesLeft(): void {
    this.trendingMoviesElement.scrollLeft += -100;
  }

  public scrollTrendingMoviesRight(): void {
    this.trendingMoviesElement.scrollLeft += 100;
  }

}