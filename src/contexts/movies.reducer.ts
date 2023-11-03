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
};

export enum MoviesTypes {
  CONTENT_LOADING = "CONTENT_LOADING",
  MOVIES_LOADING = "MOVIES_LOADING",
  SET_GENDERS = "SET_GENDERS",
}

export const moviesInitialState = {
  contentIsLoading: false,
  moviesIsLoading: false,
  genres: [],
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
});

function reducer(state = moviesInitialState, action: Actions): any {
  switch (action.type) {
    case MoviesTypes.CONTENT_LOADING:
      return { ...state, contentIsLoading: !state.contentIsLoading };
    case MoviesTypes.MOVIES_LOADING:
      return { ...state, moviesIsLoading: !state.moviesIsLoading };
    case MoviesTypes.SET_GENDERS:
      return { ...state, genres: action.payload };

    default:
      return state;
  }
}

export default reducer;
