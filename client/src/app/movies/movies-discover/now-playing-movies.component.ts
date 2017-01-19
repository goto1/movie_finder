import { Component, OnInit }        from '@angular/core';

import { Movie }                    from '../models/movie';
import { Pagination }               from './pagination';
import { DiscoverMoviesService }    from '../services/discover-movies.service';

@Component({
  selector: 'now-playing-movies',
  templateUrl: './movies-discover.component.html',
  styleUrls: [ './movies-discover.component.sass' ]
})
export class NowPlayingMoviesComponent extends Pagination implements OnInit {
  
  constructor(protected discoverMoviesService: DiscoverMoviesService) {
    super();
  }

  ngOnInit(): void {
    this.discoverMoviesService.getMovies().subscribe(
      movies => {
        this.allMovies = movies;
        this.showMovies = this.allMovies[this.page];
      },
      error => console.error(error)
    );
  }
}
