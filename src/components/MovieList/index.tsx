import React from "react";

import { useMoviesContext } from "contexts/movies.context";

import MovieCard from "components/MovieCard";

import * as S from "./styles";

const MovieList: React.FC = () => {
  const { movies } = useMoviesContext();

  return (
    <S.Wrapper>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          title={movie.original_title}
          release={movie.release_date}
        />
      ))}
    </S.Wrapper>
  );
};

export default MovieList;
