import { Component, OnInit }  from '@angular/core';

import { IMovie }             from '../../shared/interfaces';
import { NowPlayingService }  from '../services/discover/now-playing.service';

@Component({
  selector: 'now-playing',
  templateUrl: './display-movies-template.html',
  styleUrls: [ './display-movies-template.sass' ]
})
export class NowPlayingComponent implements OnInit {
  public movies: IMovie[];
  public error: boolean; 

  constructor(private nowPlayingService: NowPlayingService) { }
  
  ngOnInit(): void {
    this.getMovies();
  }

  public nextPage(): void {
    this.nowPlayingService.pagination.nextPage();
    this.getMovies();
  }

  public previousPage(): void {
    this.nowPlayingService.pagination.previousPage();
    this.getMovies();
  }

  public hasPrevious(): boolean {
    return this.nowPlayingService.pagination.hasPrevious();
  }

  public hasNext(): boolean {
    return this.nowPlayingService.pagination.hasNext();
  }

  private getMovies(): void {
    this.nowPlayingService.getNowPlaying()
      .subscribe(
        movies => this.movies = movies,
        error => this.error = true
      );
  }
}