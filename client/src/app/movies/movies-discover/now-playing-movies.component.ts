import { Component, OnInit }        from '@angular/core';

import { Movie }                    from '../models/movie';
import { MoviesPaginated }          from './movies-paginated';
import { DiscoverMoviesService }    from '../services/discover-movies.service';

@Component({
  selector: 'now-playing-movies',
  templateUrl: './movies-discover.component.html',
  styleUrls: [ './movies-discover.component.sass' ],
})
export class NowPlayingMoviesComponent implements OnInit {
  public showMovies: Movie[];
  public moviesPaginated: MoviesPaginated;
  public title: string = 'Now Playing';

  constructor(private discoverMoviesService: DiscoverMoviesService) { }

  ngOnInit(): void {
    this.discoverMoviesService.getNowPlayingMovies().subscribe(
      movies => {
        this.moviesPaginated = new MoviesPaginated(movies);
        this.showMovies = this.moviesPaginated.getCurrentPageContent();
        console.log(this.showMovies);
      },
      error => console.error(error)
    );
  }
  
  public nextPage(): void {
    this.moviesPaginated.nextPage();
    this.showMovies = this.moviesPaginated.getCurrentPageContent();
  }

  public prevPage(): void {
    this.moviesPaginated.previousPage();
    this.showMovies = this.moviesPaginated.getCurrentPageContent();
  }
}

