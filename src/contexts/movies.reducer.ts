import { Dispatch, Reducer, ReducerAction } from "react";

type DispatchType = Dispatch<ReducerAction<Reducer<any, any>>>;

type Actions = {
  type: string;
  payload: any;
};

export type MoviesContextType = {
  isLoading: boolean;
};

export enum MoviesTypes {
  GET_LOADING = "GET_LOADING",
  SET_TAB = "SET_TAB",
  SET_DATA = "SET_DATA",
  SET_FILTER_OPTION = "SET_FILTER_OPTION",
  TOGGLE_FILTER_DRAWER = "TOGGLE_FILTER_DRAWER",
}

export const moviesInitialState = {
  isLoading: false,
};

export const allActions = (dispatch: DispatchType) => ({
  handleToggleGetLoading: () =>
    dispatch({
      type: MoviesTypes.GET_LOADING,
    }),
});

function reducer(state = moviesInitialState, action: Actions): any {
  switch (action.type) {
    case MoviesTypes.GET_LOADING:
      return { ...state, isLoading: !state.isLoading };

    default:
      return state;
  }
}

export default reducer;
