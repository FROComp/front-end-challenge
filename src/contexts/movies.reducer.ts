import { DispatchType, Actions, IGenre, IMovie } from "types/movie.types";

export enum MoviesTypes {
  CONTENT_LOADING = "CONTENT_LOADING",
  MOVIES_LOADING = "MOVIES_LOADING",
  SET_GENDERS = "SET_GENDERS",
  SET_MOVIES = "SET_MOVIES",
  SET_FILTER = "SET_FILTER",
}

export const moviesInitialState = {
  contentIsLoading: false,
  moviesIsLoading: false,
  genres: [],
  movies: [],
  filters: {
    genresIds: [],
    page: 1,
    maxPages: 0,
  },
  handleSetGenresFilter: () => null,
  handleSetPageFilter: () => null,
};

export const allActions = (dispatch: DispatchType) => ({
  handleToggleContentLoading: () =>
    dispatch({
      type: MoviesTypes.CONTENT_LOADING,
    }),
  handleToggleMoviesLoading: () =>
    dispatch({
      type: MoviesTypes.MOVIES_LOADING,
    }),
  handleSetGenres: (genders: IGenre[]) =>
    dispatch({
      type: MoviesTypes.SET_GENDERS,
      payload: genders,
    }),
  handleSetMovies: (movies: IMovie[]) =>
    dispatch({
      type: MoviesTypes.SET_MOVIES,
      payload: movies,
    }),
  handleSetFilter: (name: string, value: any) =>
    dispatch({
      type: MoviesTypes.SET_FILTER,
      payload: { name, value },
    }),
});

function reducer(state = moviesInitialState, action: Actions): any {
  switch (action.type) {
    case MoviesTypes.CONTENT_LOADING:
      return { ...state, contentIsLoading: !state.contentIsLoading };
    case MoviesTypes.MOVIES_LOADING:
      return { ...state, moviesIsLoading: !state.moviesIsLoading };
    case MoviesTypes.SET_GENDERS:
      return { ...state, genres: action.payload };
    case MoviesTypes.SET_MOVIES:
      return { ...state, movies: action.payload };
    case MoviesTypes.SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    default:
      return state;
  }
}

export default reducer;
