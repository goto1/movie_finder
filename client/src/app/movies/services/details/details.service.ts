import { Injectable }           from '@angular/core';
import { Http, Response }       from '@angular/http';
import { Observable }           from 'rxjs/Observable';

import { API }                  from '../moviedb-api-info';
import { IDetailedMovie }       from '../../../shared/interfaces';
import { TMDBDataExtractor }    from '../tmdb-data-extractor';
import { TMDBResponseHandler }  from '../tmdb-response-handler';

@Injectable()
export class DetailsService {
  private data;
  private lastMovie: number;

  constructor(private http: Http) { }

  public getDetails(id: number | string): Observable<IDetailedMovie> {
    const apiUrl = API.url + '/movie/' + id + '?' + 
      API.key + '&language=en-US' + '&append_to_response=videos,similar';
    
    this.lastMovie = +id;

    return this.http.get(apiUrl)
      .map(data => this.extractData(data))
      .catch(err => TMDBResponseHandler.handleError(err));
  }

  public getLastMovieRetrieved(): number {
    return this.lastMovie;
  }

  private extractData(res: Response): Object {
    let movie = res.json() || {};

    TMDBDataExtractor.getPosterUrl(movie, true);
    TMDBDataExtractor.getSimilarMovies(movie);
    TMDBDataExtractor.getTrailerUrl(movie);
    TMDBDataExtractor.getPosterUrlsFromMovies(movie.similar, false);
    
    return movie;
  }
}