import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Movie }          from '../models/movie';
import { API }            from './moviedb-api-info';

import { TMDBService }    from './tmdb.service';

@Injectable()
export class DiscoverService extends TMDBService {

  constructor(private http: Http) { super(); };

  public getNowPlaying(): Observable<[Movie]> {
    this.page = this.page || 1;
    const url = `${API.url}/movie/now_playing?${API.key}&language=en-US&page=${this.page}`;
    return this.getMovies(url);
  }

  private getMovies(url): Observable<[Movie]> {
    return this.http.get(url)
      .map(response => this.extractData(response))
      .catch(err => this.handleError(err));
  }

  private extractData(res: Response) {
    let data = res.json();

    this.extractPageCount(data);
    this.extractPosterUrl(data.results);
    
    return data.results || {};
  }

  private extractPageCount(movies) {
    this.page = movies.page;
    this.pageCount = movies.total_pages;
  }

  private extractPosterUrl(movies: Movie[]) {
    movies.map(movie => {
      if (movie.poster_path) {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      } else {
        movie.poster_path = '';
      }
    });
  }
}