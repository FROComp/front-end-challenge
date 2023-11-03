import React, { createContext, useReducer, useContext, useEffect } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import moviesReducer, {
  MoviesContextType,
  allActions,
  moviesInitialState,
} from "contexts/movies.reducer";

import { getGenrersService } from "services/genres.service";

import arrayAddOrRemove from "utils/arrayAddOrRemove";
import serializeParams from "utils/serializeParams";

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
  const genders = searchParams.get("with_genres")?.split(",");
  const page = searchParams.get("page") || "1";

  // Methods
  const handleLoadStatesFromParams = () => {
    if (genders)
      actions.handleSetFilter(
        "genresIds",
        genders.map((gender) => parseInt(gender))
      );

    if (page) actions.handleSetFilter("page", parseInt(page));
  };

  const handleUpdateSearchParams = (page?: number) => {
    const { filters } = state;
    const params: any = {};

    if (filters.genresIds.length > 0) {
      params.with_genres = filters.genresIds;
      params.page = filters.page;
    }

    if (page) {
      actions.handleSetFilter("page", page);
      params.page = page;
    }

    navigate({
      pathname: window.location.pathname,
      search: serializeParams(params),
    });
  };

  const handleSetGenresFilter = (item: number) => {
    const newGenders = arrayAddOrRemove(item, state.filters.genresIds);

    actions.handleSetFilter("genresIds", newGenders);
    handleUpdateSearchParams();
  };

  const handleSetPageFilter = (page: number) => {
    actions.handleSetFilter("page", page);
    handleUpdateSearchParams(page);
  };

  // Services
  const handleGetGenres = async () => {
    await getGenrersService()
      .then((response) => actions.handleSetGenders(response.data.genres))
      .catch((error) => error);
  };

  // Effects
  useEffect(() => {
    handleLoadStatesFromParams();
    handleGetGenres();
  }, []);

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
