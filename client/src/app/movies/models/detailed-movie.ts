import { Movie } from './movie';
import { Genre } from './genre';

export interface DetailedMovie {
  id: number;
  imdb_id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  similar: Movie[];
  trailer: string;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
}