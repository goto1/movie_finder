import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IMoviesListData } from '../../shared/interfaces';

import { MovieService } from '../../services/movie.service';

  @Component({
    templateUrl: './search-movies.component.html',
    styleUrls: [ './search-movies.component.sass' ]
  })
  export class SearchMoviesComponent implements OnInit {
    searchQuery: FormGroup;
    searchResults: IMoviesListData;
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
            this.query = params['query'] || '';
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
      this.router.navigate(['search'], {
        queryParams: { query: this.query }
      });
    }

    private search(): void {
      this.movieService.searchMovie(this.query)
        .subscribe(
          result => this.searchResults = result,
          err => console.error(err)
        );
    }
  }