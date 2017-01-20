import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { MovieDBService } from './moviedb.service';
import { Movie }          from '../models/movie';
import { API }            from './moviedb-api-info';

@Injectable()
export class DiscoverMoviesService extends MovieDBService {
  constructor(private http: Http) { super(); }

  public getNowPlayingMovies(): Observable<[Movie]> {
    const apiUrl = API.url + '/movie/now_playing?' + API.key + '&language=en-US&page=1';
    return this.getMovies(apiUrl);
  }

  public getPopularMovies(): Observable<[Movie]> {
    const apiUrl = API.url + '/movie/popular?' + API.key + '&language=en-US&page=1';
    return this.getMovies(apiUrl);
  }

  private getMovies(apiUrl: string): Observable<[Movie]> {
    return this.http.get(apiUrl)
      .map(data => this.extractData(data))
      .catch(this.handleError);
  }

  protected extractData(res: Response) {
    let movies = res.json() || {};

    return this.splitBySets(movies);
  }

  private splitBySets(data) {
    let extractedMovies = [];
    let tempArr: Movie[] = [];
    let counter: number = 1;
    const moviesPerSet = 5;

    if (data.results) {
      data.results.forEach(item => {
        tempArr.push(item);
        if (counter % moviesPerSet === 0) {
          extractedMovies.push(tempArr);
          tempArr = [];
        }
        counter++;
      });
    }
    return extractedMovies;
  }
}