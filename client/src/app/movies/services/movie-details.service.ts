import { Injectable }         from '@angular/core';
import { Http, Response }     from '@angular/http';
import { Observable }         from 'rxjs/Observable';

import { TMDBService }        from './tmdb.service';
import { DetailedMovie }      from '../models/detailed-movie';
import { Movie }              from '../models/movie';
import { API }                from './moviedb-api-info';

import { TMDBDataExtractor }  from './tmdb-data-extractor';

@Injectable()
export class MovieDetailsService extends TMDBService {
  private data;
  private lastMovie: number;

  constructor(private http: Http) { super(); }

  public getDetails(id: number | string): Observable<DetailedMovie> {
    const apiUrl = API.url + '/movie/' + id + '?' + 
      API.key + '&language=en-US' + '&append_to_response=videos,similar';
    
    this.lastMovie = +id;

    return this.http.get(apiUrl)
      .map(data => this.extractData(data))
      .catch(err => this.handleError(err));
  }

  public getLastMovieRetrieved(): number {
    return this.lastMovie;
  }

  protected extractData(res: Response): Object {
    let movie = res.json() || {};

    TMDBDataExtractor.getPosterUrlSingleMovie(movie);
    TMDBDataExtractor.getSimilarMovies(movie);
    TMDBDataExtractor.getTrailerUrl(movie);
    TMDBDataExtractor.getPosterUrlsMultipleMovies(movie.similar);
    
    return movie;
  }
}