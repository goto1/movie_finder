import { Component, OnInit } from '@angular/core';

import { DiscoverService } from '../services/discover.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'now-playing',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class NowPlayingComponent implements OnInit {

  public movies: Movie[];
  public error: boolean; 

  constructor(public discoverService: DiscoverService) { }
  
  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.discoverService.getNowPlaying()
      .subscribe(
        movies => {
          this.movies = movies;
          console.log(this.movies);
        },
        error => this.error = true
      );
  }

  public nextPage(): void {
    this.discoverService.nextPage();
    this.getMovies();
  }

  public previousPage(): void {
    this.discoverService.previousPage();
    this.getMovies();
  }

}