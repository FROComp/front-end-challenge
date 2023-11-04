import { DispatchType, Actions, IGenre, IMovie } from "./movie.types";

export interface ICast {
  id: number;
  profile_path: string;
  original_name: string;
  character: string;
}

export interface ICrew {
  id: number;
  original_name: string;
  job: string;
}

export interface IVideo {
  id: string;
  name: string;
  key: string;
  site: string;
}

export interface IProductionCompanie {
  id: number;
  logo_path: string;
  name: string;
}

export interface IReleaseDate {
  certification: string;
  release_date: string;
}

export interface ICredits {
  cast: ICast[];
  crew: ICrew[];
}

export interface IVideos {
  results: IVideo[];
}

export interface IRecommendations {
  page: number;
  results: IMovie[];
}

export interface IReleaseDates {
  results: [
    {
      iso_3166_1: string;
      release_dates: IReleaseDate[];
    }
  ];
}

export interface IDetails {
  original_title: string;
  poster_path: string;
  release_date: string;
  genres: IGenre[];
  runtime: number;
  vote_average: number;
  overview: string;
  production_companies: IProductionCompanie[];
  credits: ICredits;
  videos: IVideos;
  release_dates: IReleaseDates;
  recommendations: IRecommendations;
}

export type DetailsContextType = {
  detailsIsLoading: boolean;
  details: IDetails | null;
};

export type { DispatchType, Actions, IGenre, IMovie };
