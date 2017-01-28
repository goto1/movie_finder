import { Component, OnInit }  from '@angular/core';
import { 
  FormBuilder, FormGroup, 
  Validators }                from '@angular/forms';

import { IMovie }             from '../../shared/interfaces';
import { SearchService }      from '../services/search/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.sass' ]
})
export class SearchComponent implements OnInit {
  searchQuery: FormGroup;
  movies: IMovie[];
  error: boolean;
  cachedQuery: string;

  constructor(
    private fb: FormBuilder, 
    private sService: SearchService ) { }

  ngOnInit(): void {
    this.searchQuery = this.fb.group({
      query: ['', [Validators.required]]
    });
    
    this.checkForCachedSearches();
  }

  onSubmit(): void {
    this.searchFor(this.searchQuery.value.query);
  }

  private checkForCachedSearches() {
    if (this.sService.cachedQuery()) {
      this.cachedQuery = this.sService.cachedQuery();
      this.searchFor(this.cachedQuery);
    }
  }

  private searchFor(query: string) {
    this.sService.search(query)
      .subscribe(
        movies => this.movies = movies,
        error => this.error = true
      );
  }
}
