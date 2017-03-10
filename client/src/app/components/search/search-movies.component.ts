import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieService } from '../../services/movie.service';

  @Component({
    selector: 'search-movies',
    templateUrl: './search-movies.component.html',
    styleUrls: [ './search-movies.component.sass' ]
  })
  export class SearchMoviesComponent implements OnInit {
    searchQuery: FormGroup;
    query: string;

    constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private movieService: MovieService ) { }

    ngOnInit(): void {
      this.route.queryParams
        .subscribe(
          params => {
            this.query = params['search'] || '';
            this.searchQuery = this.fb.group({
              query: [this.query, [Validators.required]]
            });

            if (this.query) {
              this.search();
            }
          }
        );
    }

    onSubmit(): void {
      this.query = this.searchQuery.value.query;
      this.router.navigate(['test'], {
        queryParams: { search: this.query }
      });
    }

    private search(): void {
      this.movieService.searchMovie(this.query)
        .subscribe(
          movies => console.log(movies),
          err => console.error(err)
        );
    }
  }