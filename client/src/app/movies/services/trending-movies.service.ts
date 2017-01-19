import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { MovieDBService } from './moviedb.service';
import { Movie }          from '../models/movie';
import { API }            from './moviedb-api-info';

@Injectable()
export class TrendingMoviesService extends MovieDBService {
  private apiUrl = API.url + '/discover/movie?' + API.key + '&language=en-US&sort_by=popularity.desc' + '&include_adult=false&include_video=false&page=1';

  constructor(private http: Http) { super(); }

  public getMovies(): Observable<[Movie]> {
    return this.http.get(this.apiUrl)
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