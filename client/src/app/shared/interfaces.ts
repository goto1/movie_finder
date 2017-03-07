export interface IGenre {
  id: number;
  name: string;
}

export interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number
}

export interface IDetailedMovie extends IMovie {
  imdb_id: string;
  overview: string;
  release_date: string;
  runtime: number;
  similar: IMovie[];
  trailer: string;
  vote_count: number;
  genres: IGenre[];
  favorite: boolean;
}

export interface ICategory {
  value: number;
  name: string;
}

export interface ISelectedCategory {
  category: ICategory;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

/**
 * KEEP BELOW
 */

export interface IMovieOverview {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
};

export interface IMovieDetailed extends IMovieOverview {
  backdrop_path: string;
  genres: [ { id: number, name: string } ];
  isFavorite: boolean;
  overview: string;
  release_date: string;
  runtime: number;
  similar: [IMovieOverview],
  trailer: string;
}

export interface IMoviesListData {
  page: number;
  movies: [IMovieOverview],
  total_pages: number;
}