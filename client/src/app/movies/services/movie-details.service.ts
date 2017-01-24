import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { MovieDBService } from './moviedb.service';
import { DetailedMovie }  from '../models/detailed-movie';
import { Movie }          from '../models/movie';
import { API }            from './moviedb-api-info';

@Injectable()
export class MovieDetailsService extends MovieDBService {
  private data;
  private lastMovie: number;

  constructor(private http: Http) { super(); }

  public getDetails(id: number | string): Observable<DetailedMovie> {
    const apiUrl = API.url + '/movie/' + id + '?' + 
      API.key + '&language=en-US' + '&append_to_response=videos,similar';
    
    this.lastMovie = +id;

    return this.http.get(apiUrl)
      .map(data => this.extractData(data))
      .catch(this.handleError);
  }

  public getLastMovieRetrieved(): number {
    return this.lastMovie;
  }

  protected extractData(res: Response): Object {
    let movie = res.json() || {};

    movie.similar = this.extractSimilarMovies(movie);
    movie.trailer = this.extractTrailerUrl(movie);
    movie.poster_path = this.extractPosterUrl(movie);
    
    return movie;
  }

  private extractSimilarMovies(movie): Movie[] {
    let similar: Movie[] = [];
    const numberOfMovies: number = 6;
    
    if (movie.similar.results) {
      if (movie.similar.results.length > numberOfMovies) {
        similar = movie.similar.results.slice(0, numberOfMovies);
      } else {
        similar = movie.similar.results;
      }
    }
    return similar;
  }

  private extractTrailerUrl(movie): string {
    let trailerUrl: string = '';

    if (movie.videos.results[0]) {
      trailerUrl = `https://youtube.com/embed/${movie.videos.results[0].key}`;
    }
    return trailerUrl;
  }

  private extractPosterUrl(movie): string {
    let posterUrl: string = '';

    if (movie.poster_path) {
      posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    return posterUrl;
  }
}