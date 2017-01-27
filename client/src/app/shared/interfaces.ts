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
}

export interface ICategory {
  value: number;
  name: string;
}

export interface ISelectedCategory {
  category: ICategory;
}






