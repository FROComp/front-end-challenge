import { Dispatch, Reducer, ReducerAction } from "react";

export type DispatchType = Dispatch<ReducerAction<Reducer<any, any>>>;

export type Actions = {
  type: string;
  payload: any;
};

export type IGenre = {
  id: number;
  name: string;
};

export type IMovie = {
  id: number;
  original_title: string;
  release_date: string;
  poster_path: string;
};

export type IMetas = { name: string; content: string }[];

export type MoviesContextType = {
  contentIsLoading: boolean;
  moviesIsLoading: boolean;
  genres: IGenre[];
  movies: IMovie[];
  filters: {
    genresIds: number[];
    page: number;
    maxPages: number;
  };
  handleSetGenresFilter: (item: number) => void;
  handleSetPageFilter: (page: number) => void;
};
