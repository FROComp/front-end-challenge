import React from "react";

import MovieCard from "components/MovieCard";

import * as S from "./styles";

interface IMovie {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
}

interface IMovieListProps {
  movies: IMovie[];
}

const MovieList: React.FC<IMovieListProps> = ({ movies }) => {
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
