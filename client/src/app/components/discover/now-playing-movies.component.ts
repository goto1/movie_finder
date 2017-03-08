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

    this.movieService.getNowPlaying(1)
      .subscribe(
        res => {
          this.pagination.currentPage = res.page;
          this.pagination.pageCount = res.total_pages;
          this.movies = res.movies;
        },
        err => console.log(err)
      );
  }

  nextPage() {
    if (!this.pagination.hasNext()) {
      return;
    }

    this.pagination.nextPage();
    this.updateMovieList();
  }

  prevPage() {
    if (!this.pagination.hasPrev()) {
      return;
    }

    this.pagination.prevPage();
    this.updateMovieList();
  }

  private updateMovieList(): void {
    this.movieService.getNowPlaying(this.pagination.currentPage)
      .subscribe(
        res => {
          this.pagination.currentPage = res.page;
          this.pagination.pageCount = res.total_pages;
          this.movies = res.movies;
        },
        err => console.log(err)
      );
  }
}

