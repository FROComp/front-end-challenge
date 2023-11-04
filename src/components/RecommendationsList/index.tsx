import React from "react";

import { useDetailsContext } from "contexts/details.context";

import * as S from "./styles";

import MovieList from "components/MovieList";

const RecommendationsList: React.FC = () => {
  const { details } = useDetailsContext();

  const movies = details?.recommendations?.results || [];

  return (
    <>
      {movies.length > 0 && (
        <>
          <S.Title>Recomendações</S.Title>
          <MovieList movies={movies} />{" "}
        </>
      )}
    </>
  );
};

export default RecommendationsList;
