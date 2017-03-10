import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieService } from '../../services/movie.service';
import { IMovieOverview } from '../../shared/interfaces';
import { Pagination } from '../../shared/pagination';

@Component({
  templateUrl: './layout.html',
  styleUrls: [ './styles.sass' ]
})
export class UpcomingMoviesComponent implements OnInit {
  movies: IMovieOverview[];
  pagination: Pagination;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.pagination = new Pagination();

    this.route.queryParams
      .subscribe(
        params => {
          this.pagination.currentPage = +params['page'] || 1;
          this.fetchMovies();
        }
      );
  }

  nextPage(): void {
    if (this.pagination.hasNext()) {
      this.pagination.nextPage();
      this.switchPage();
    }
  }

  prevPage(): void {
    if (this.pagination.hasPrev()) {
      this.pagination.prevPage();
      this.switchPage();
    }
  }

  private switchPage(): void {
    this.router.navigate(['discover/upcoming'], {
      queryParams: { page: this.pagination.currentPage }
    });
  }

  private fetchMovies(): void {
    this.movieService.getUpcoming(this.pagination.currentPage)
      .subscribe(
        res => {
          this.pagination.currentPage = res.page;
          this.pagination.pageCount = res.total_pages;
          this.movies = res.movies
        },
        err => console.error(err)
      );
  }
}