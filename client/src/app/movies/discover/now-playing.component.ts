import { Component, OnInit }  from '@angular/core';

import { NowPlayingService }  from '../services/now-playing.service';
import { Movie }              from '../models/movie';

@Component({
  selector: 'now-playing',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class NowPlayingComponent implements OnInit {
  public movies: Movie[];
  public error: boolean; 

  constructor(private nowPlayingService: NowPlayingService) { }
  
  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.nowPlayingService.getNowPlaying()
      .subscribe(
        movies => this.movies = movies,
        error => this.error = true
      );
  }

  public nextPage(): void {
    this.nowPlayingService.nextPage();
    this.getMovies();
  }

  public previousPage(): void {
    this.nowPlayingService.previousPage();
    this.getMovies();
  }

  public hasPrevious(): boolean {
    return this.nowPlayingService.hasPrevious();
  }

  public hasNext(): boolean {
    return this.nowPlayingService.hasNext();
  }

}