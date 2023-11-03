import axios, { AxiosResponse } from "api/axios.instante";

// APIS -> cast, recommendations, videos

// https://www.npmjs.com/package/react-youtube

export const getPopularMoviesServices = (
  page: number = 1
): Promise<AxiosResponse<any>> =>
  axios.get("/movie/popular", { params: { page } });

export const getMoviesByGenresService = (
  with_genres: string,
  page: number = 1
): Promise<AxiosResponse<any>> =>
  axios.get("/discover/movie", { params: { with_genres, page } });

export const getMovieDetailsService = (
  movieId: number
): Promise<AxiosResponse<any>> => axios.get(`/movie/${movieId}`);
