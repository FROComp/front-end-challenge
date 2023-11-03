import React, { createContext, useReducer, useContext, useEffect } from "react";

import moviesReducer, {
  MoviesContextType,
  allActions,
  moviesInitialState,
} from "contexts/movies.reducer";

import { getGenrersService } from "services/genres.service";

export const MoviesContext =
  createContext<MoviesContextType>(moviesInitialState);

const MoviesProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, moviesInitialState);

  const actions = allActions(dispatch);

  const handleGetGenres = async () => {
    await getGenrersService()
      .then((response) => actions.handleSetGenders(response.data.genres))
      .catch((error) => error);
  };

  useEffect(() => {
    handleGetGenres();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        ...actions,
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
