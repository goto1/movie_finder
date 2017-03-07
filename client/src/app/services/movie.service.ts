import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IMovie } from '../shared/interfaces';
import { TMDBUtils } from './tmdbUtils';

const api = {
  url: 'https://api.themoviedb.org/3',
  key: 'api_key=03eb2b84d82f7dbdb50c3106fb6c2de3',
  options: '&language=en-US',
};

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getNowPlaying(): Observable<[IMovie]> {
    const url = `${api.url}/movie/now_playing?${api.key}${api.options}&page=1`;

    return this.http.get(url)
      .map(response => TMDBUtils.extractData(response))
      .map(data => TMDBUtils.fixImagePaths(data))
      .catch(err => err);
  }

}