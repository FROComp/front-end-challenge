import React, { createContext, useReducer, useContext, useEffect } from "react";

import { AxiosResponse } from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

import moviesReducer, {
  allActions,
  moviesInitialState,
} from "contexts/movies.reducer";

import { MoviesContextType } from "types/movie.types";

import { getGenrersService } from "services/genres.service";
import {
  getPopularMoviesServices,
  getMoviesByGenresService,
} from "services/movies.service";

import arrayAddOrRemove from "utils/arrayAddOrRemove";
import serializeParams from "utils/serializeParams";
import { FILTER } from "constants/filter";

export const MoviesContext =
  createContext<MoviesContextType>(moviesInitialState);

const MoviesProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, moviesInitialState);
  const [searchParams] = useSearchParams();

  const actions = allActions(dispatch);
  const navigate = useNavigate();

  // Loaders
  const genres = searchParams
    .get(FILTER.WITHGENRES)
    ?.split(",")
    .map((gender) => parseInt(gender));

  const page = searchParams.get(FILTER.PAGE) || "1";

  // Methods
  const handleLoadStatesFromParams = () => {
    if (genres) actions.handleSetFilter(FILTER.GENRER, genres);

    if (page) actions.handleSetFilter(FILTER.PAGE, parseInt(page));
  };

  const handleUpdateSearchParams = (page?: number) => {
    const { filters } = state;
    const params: any = {};

    if (filters.genresIds.length > 0) {
      params.with_genres = filters.genresIds;
      params.page = filters.page;
    }

    if (page) {
      actions.handleSetFilter(FILTER.PAGE, page);
      params.page = page;
    }

    navigate({
      pathname: window.location.pathname,
      search: serializeParams(params),
    });
  };

  const handleSetGenresFilter = (item: number) => {
    const newGenres = arrayAddOrRemove(item, state.filters.genresIds);

    actions.handleSetFilter(FILTER.GENRER, newGenres);
    handleUpdateSearchParams();
  };

  const handleSetPageFilter = (page: number) => {
    actions.handleSetFilter(FILTER.PAGE, page);
    handleUpdateSearchParams(page);
  };

  const handleNormalizeTotalPages = (total: number) =>
    total > 500 ? 500 : total;

  const handleGetSuccess = (response: AxiosResponse) => {
    const totalPages = handleNormalizeTotalPages(response.data.total_pages);

    actions.handleSetMovies(response.data.results);
    actions.handleSetFilter(FILTER.MAXPAGES, totalPages);
    actions.handleToggleContentLoading();
  };

  // Services
  const handleGetGenres = async () => {
    await getGenrersService()
      .then((response) => actions.handleSetGenres(response.data.genres))
      .catch((error) => error);
  };

  const handleGetPopularMovies = async () => {
    actions.handleToggleContentLoading();
    await getPopularMoviesServices(parseInt(page))
      .then(handleGetSuccess)
      .catch((error) => error);
  };

  const handleGetMoviesByGenres = async () => {
    if (genres) {
      actions.handleToggleContentLoading();
      await getMoviesByGenresService(genres.join(","), parseInt(page))
        .then(handleGetSuccess)
        .catch((error) => error);
    }
  };

  const handleGetMovies = () => {
    if (genres) {
      handleGetMoviesByGenres();
    } else {
      handleGetPopularMovies();
    }
  };

  // Effects
  useEffect(() => {
    handleLoadStatesFromParams();
    handleGetGenres();
  }, []);

  useEffect(handleGetMovies, [window.location.search]);

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        ...actions,
        handleSetGenresFilter,
        handleSetPageFilter,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = (): MoviesContextType => {
  const context = useContext(MoviesContext);

  if (!context)
    throw new Error("useMoviesContext must be used within an MoviesProvider");

  return context;
};

export default MoviesProvider;
