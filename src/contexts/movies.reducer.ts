import { Dispatch, Reducer, ReducerAction } from "react";

type DispatchType = Dispatch<ReducerAction<Reducer<any, any>>>;

type Actions = {
  type: string;
  payload: any;
};

export type IGenres = {
  id: number;
  name: string;
};

export type MoviesContextType = {
  contentIsLoading: boolean;
  moviesIsLoading: boolean;
  genres: IGenres[];
  filters: {
    genresIds: number[];
    page: number;
    maxPages: number | null;
  };
  handleSetGenresFilter: (item: number) => void;
  handleSetPageFilter: (page: number) => void;
};

export enum MoviesTypes {
  CONTENT_LOADING = "CONTENT_LOADING",
  MOVIES_LOADING = "MOVIES_LOADING",
  SET_GENDERS = "SET_GENDERS",
  SET_FILTER = "SET_FILTER",
}

export const moviesInitialState = {
  contentIsLoading: false,
  moviesIsLoading: false,
  genres: [],
  filters: {
    genresIds: [],
    page: 1,
    maxPages: null,
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
  handleSetGenders: (genders: IGenres[]) =>
    dispatch({
      type: MoviesTypes.SET_GENDERS,
      payload: genders,
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
