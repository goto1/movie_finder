import { Component, OnInit }      from '@angular/core';

import { Movie }                  from '../models/movie';
import { MoviesPaginated }        from './movies-paginated';
import { DiscoverMoviesService }  from '../services/discover-movies.service';

@Component({
  selector: 'popular-movies',
  templateUrl: './movies-discover.component.html',
  styleUrls: [ './movies-discover.component.sass' ]
})
export class PopularMoviesComponent implements OnInit {
  public title: string = 'Popular Movies';
  public showMovies: Movie[];
  public moviesPaginated: MoviesPaginated;

  constructor(private discoverMoviesService: DiscoverMoviesService) { }

  ngOnInit(): void {
    this.discoverMoviesService.getPopularMovies().subscribe(
      movies => {
        this.moviesPaginated = new MoviesPaginated(movies);
        this.showMovies = this.moviesPaginated.getCurrentPageContent();
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