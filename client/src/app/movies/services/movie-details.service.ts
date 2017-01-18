import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { MovieDBService } from './moviedb.service';
import { DetailedMovie }  from '../models/detailed-movie';
import { API }            from './moviedb-api-info';

//import { DetailedMovie }  from '../models/detailed-movie';
import { Movie }          from '../models/movie';
import { Genre }          from '../models/genre';

@Injectable()
export class MovieDetailsService extends MovieDBService {
  private data;

  constructor(private http: Http) { super(); }

  public getDetails(id: number | string): Observable<DetailedMovie> {
    //this.testing();
    const apiUrl = API.url + '/movie/' + id + '?' + 
      API.key + '&language=en-US' + '&append_to_response=videos,similar';
    return this.http.get(apiUrl)
      .map(this.extractData)
      .map(this.extractSimilarMovies)
      .catch(this.handleError);
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
    console.log(movie);

    // if (movie.similar.results) {
    //   if (movie.similar.results.length > numberOfMovies) {
    //     movie.similar.results.slice(0, numberOfMovies);
    //   } else {
    //     movie.similar.results;
    //   }
    // }

    return movie;
  }

  protected extractData(res: Response) {
    return res.json();
  }


}