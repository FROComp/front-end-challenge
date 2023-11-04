import { DispatchType, Actions, IDetails } from "types/details.types";

export enum MoviesTypes {
  DETAILS_LOADING = "DETAILS_LOADING",
  SET_DETAILS = "SET_DETAILS",
}

export const detailsInitialState = {
  detailsIsLoading: false,
  details: null,
};

export const allActions = (dispatch: DispatchType) => ({
  handleToggleDetailsLoading: () =>
    dispatch({
      type: MoviesTypes.DETAILS_LOADING,
    }),
  handleSetDetails: (details: IDetails) =>
    dispatch({
      type: MoviesTypes.SET_DETAILS,
      payload: details,
    }),
});

function reducer(state = detailsInitialState, action: Actions): any {
  switch (action.type) {
    case MoviesTypes.DETAILS_LOADING:
      return { ...state, contentIsLoading: !state.detailsIsLoading };
    case MoviesTypes.SET_DETAILS:
      return { ...state, details: action.payload };

    default:
      return state;
  }
}

export default reducer;
