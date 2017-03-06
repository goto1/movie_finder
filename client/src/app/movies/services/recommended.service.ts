import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API } from './moviedb-api-info';
import { IMovie } from '../../shared/interfaces';
import { TMDBDataExtractor } from './tmdb-data-extractor';
import { TMDBResponseHandler } from './tmdb-response-handler';

@Injectable()
export class RecommendedService {
  private url = `${API.url}/search/movie?${API.key}&language=en-US&sort_by=popularity.desc`;

  constructor(private http: Http) { }

  getRecommendedMovies(): Observable<IMovie[]> {
    const url = API.url + '/discover/movie?' + API.key + 
      '&language=en-US&sort_by=popularity.desc&with_genres=' + this.getGenreIds();

    return this.http.get(url)
      .map((res: Response) => this.extractData(res))
      .catch(err => TMDBResponseHandler.handleError(err));
  }

  private getGenreIds() {
    let ids = JSON.parse(localStorage.getItem('genres')).ids || [];

    if (ids.length > 3) {
      ids = ids.slice(0, 3).toString();
    } else {
      ids = ids.toString();
    }

    return ids;
  }

  private extractData(data) {
    let movies = data.json();
    // TODO needs refactoring
    console.log(movies.results);

    return movies.results;
  }
}