import { Movie } from './movie';
import { Genre } from './genre';

export interface DetailedMovie extends Movie {
  imdb_id: string;
  overview: string;
  release_date: string;
  runtime: number;
  similar: Movie[];
  trailer: string;
  vote_count: number;
  genres: Genre[];
}