import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';
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
      .map(this.extractData)
      .map(this.splitBySets)
      .catch(this.handleError);
  }

  private splitBySets(data) {
    if (data) {
      let tempArr: Movie[] = [];
      let resultingArr = [];
      let counter: number = 1;
      let setNumber = 5;

      data.forEach(item => {
        tempArr.push(item);
        if (counter % setNumber === 0) {
          resultingArr.push(tempArr);
          tempArr = [];
        }
        counter++;
      });

      return resultingArr;
    }
    return data;
  }
}