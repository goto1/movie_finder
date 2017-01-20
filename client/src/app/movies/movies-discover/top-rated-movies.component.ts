import { Component, OnInit }      from '@angular/core';

import { Movie }                  from '../models/movie';
import { MoviesPaginated }        from './movies-paginated';
import { DiscoverMoviesService }  from '../services/discover-movies.service';

@Component({
  selector: 'top-rated-movies',
  templateUrl: './movies-discover.component.html',
  styleUrls: [ './movies-discover.component.sass' ]
})
export class TopRatedMoviesComponent implements OnInit {
  public showMovies: Movie[];
  public moviesPaginated: MoviesPaginated;
  public title: string = 'Top Rated';

  constructor(private discoverMoviesService: DiscoverMoviesService) { }

  ngOnInit(): void {
    this.discoverMoviesService.getTopRatedMovies().subscribe(
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