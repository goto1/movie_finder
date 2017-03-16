import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IMovieDetailed, IMoviesListData } from '../shared/interfaces';
import { TMDBUtils } from './tmdbUtils';

const api = {
  url: 'https://api.themoviedb.org/3',
  options: 'api_key=03eb2b84d82f7dbdb50c3106fb6c2de3&language=en-US',
};

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMoviesWithGenres(genres: Array<number>): Observable<IMoviesListData> {
    let genreIds = TMDBUtils.extractRandomGenreIds(genres);

    const url = `${api.url}/discover/movie?${api.options}&sort_by=popularity.desc&with_genres=${genreIds.toString()}`;

    return this.getMovies(url);
  }

  searchMovie(title: string): Observable<IMoviesListData> {
    const url = `${api.url}/search/movie?${api.options}&query=${title}`;

    return this.getMovies(url);
  }

  getMovieDetails(id: number): Observable<IMovieDetailed> {
    const url = `${api.url}/movie/${id}?${api.options}&append_to_response=videos,similar`;

    return this.http.get(url)
      .map(response => TMDBUtils.extractDataSingleMovie(response))
      .map(movie => TMDBUtils.extractTrailerUrl(movie))
      .map(movie => TMDBUtils.extractSimilarMovies(movie))
      .catch(err => TMDBUtils.handleError(err));
  }

  getNowPlaying(page: number): Observable<IMoviesListData> {
    const url = `${api.url}/movie/now_playing?${api.options}&page=${page}`;
    return this.getMovies(url);
  }

  getPopular(page: number): Observable<IMoviesListData> {
    const url = `${api.url}/movie/popular?${api.options}&page=${page}`;
    return this.getMovies(url);
  }

  getTopRated(page: number): Observable<IMoviesListData> {
    const url = `${api.url}/movie/top_rated?${api.options}&page=${page}`;
    return this.getMovies(url);
  }

  getUpcoming(page: number): Observable<IMoviesListData> {
    const url = `${api.url}/movie/upcoming?${api.options}&page=${page}`;
    return this.getMovies(url);
  }

  private getMovies(url: string): Observable<IMoviesListData> {
    return this.http.get(url)
      .map(response => TMDBUtils.extractDataMultipleMovies(response))
      .map(data => TMDBUtils.extractMovieInformation(data))
      .catch(error => TMDBUtils.handleError(error));
  }

}