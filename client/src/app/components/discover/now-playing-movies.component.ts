import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { IMovieOverview } from '../../shared/interfaces';
import { Pagination } from '../../shared/pagination';

@Component({
  selector: 'now-playing-movies',
  templateUrl: './layout.html',
  styleUrls: [ './styles.sass' ]
})
export class NowPlayingMoviesComponent implements OnInit {
  movies: IMovieOverview[];
  pagination: Pagination;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.pagination = new Pagination();
    this.pagination.currentPage = 1;
    this.fetchMovies();
  }

  nextPage(): void {
    if (this.pagination.hasNext()) {
      this.pagination.nextPage();
      this.fetchMovies();
    }
  }

  prevPage(): void {
    if (this.pagination.hasPrev()) {
      this.pagination.prevPage();
      this.fetchMovies();
    }
  }

  private fetchMovies(): void {
    this.movieService.getNowPlaying(this.pagination.currentPage)
      .subscribe(
        res => {
          this.pagination.currentPage = res.page;
          this.pagination.pageCount = res.total_pages;
          this.movies = res.movies;
        },
        err => console.error(err)
      );
  }
}

