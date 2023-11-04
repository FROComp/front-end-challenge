import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ComponentProps,
  ComponentType,
} from "react";

import { useParams } from "react-router-dom";

import moviesReducer, {
  allActions,
  detailsInitialState,
} from "contexts/details.reducer";

import { DetailsContextType } from "types/details.types";

import { getMovieDetailsService } from "services/movies.service";

export const DetailsContext =
  createContext<DetailsContextType>(detailsInitialState);

const DetailsProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, detailsInitialState);

  const actions = allActions(dispatch);
  const { id } = useParams();

  // Services
  const handleGetMovieDetails = async () => {
    if (id) {
      await getMovieDetailsService(parseInt(id))
        .then((response) => {
          actions.handleSetDetails(response.data);
          actions.handleToggleDetailsLoading();
        })
        .catch((error) => error);
    }
  };

  useEffect(() => {
    handleGetMovieDetails();
  }, []);

  return (
    <DetailsContext.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetailsContext = (): DetailsContextType => {
  const context = useContext(DetailsContext);

  if (!context)
    throw new Error("useDetailsContext must be used within an DetailsProvider");

  return context;
};

export function withDetailsContext(Component: ComponentType) {
  return function WrapperComponent(props: ComponentProps<any>): JSX.Element {
    return (
      <DetailsProvider>
        <Component {...props} />
      </DetailsProvider>
    );
  };
}

export default DetailsProvider;
