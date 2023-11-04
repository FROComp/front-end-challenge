import axios, { AxiosResponse } from "api/axios.instante";

// https://www.npmjs.com/package/react-youtube

// credits -> https://api.themoviedb.org/3/movie/{movie_id}/credits
// recommended -> https://api.themoviedb.org/3/movie/{movie_id}/recommendations
// videos -> https://api.themoviedb.org/3/movie/{movie_id}/videos
// release -> https://api.themoviedb.org/3/movie/{movie_id}/release_dates

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
