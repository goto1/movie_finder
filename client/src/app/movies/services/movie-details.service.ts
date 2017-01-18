import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { MovieDBService } from './moviedb.service';
import { DetailedMovie }  from '../models/detailed-movie';
import { API }            from './moviedb-api-info';

@Injectable()
export class MovieDetailsService extends MovieDBService {
  private data;

  constructor(private http: Http) { super(); }

  public getDetails(id: number | string): Observable<DetailedMovie> {
    const apiUrl = API.url + '/movie/' + id + '?' + 
      API.key + '&language=en-US' + '&append_to_response=videos,similar';
    
    return this.http.get(apiUrl)
      .map(this.extractData)
      .map(this.extractSimilarMovies)
      .map(this.extractTrailerUrl)
      .map(this.extractPosterUrl)
      .catch(this.handleError);
  }

  protected extractData(res: Response): Object {
    return res.json() || {};
  }

  private extractSimilarMovies(movie): DetailedMovie {
    const numberOfMovies: number = 6;

    if (movie.similar.results) {
      if (movie.similar.results.length > numberOfMovies) {
        movie.similar = movie.similar.results.slice(0, numberOfMovies);
      } else {
        movie.similar = movie.similar.results;
      }
    }
    return movie;
  }

  private extractTrailerUrl(movie): DetailedMovie {
    if (movie.videos.results[0]) {
      movie.trailer = `https://youtube.com/embed/${movie.videos.results[0].key}`;
    }
    return movie;
  }

  private extractPosterUrl(movie): DetailedMovie {
    if (movie.poster_path) {
      movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    return movie;
  }
}