/**
 * Utility functions
 */

import * as _ from 'lodash';

export class Utils {

  static isMovieFavorite(movieId: number): boolean {
    const userInfo = JSON.parse(localStorage.getItem('user_info'));
    const userFavMovies = userInfo.movieIds;
    const index = _.indexOf(userFavMovies, movieId);

    return index !== -1 ? true : false;
  }
}