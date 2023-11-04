import React from "react";

import { useMoviesContext } from "contexts/movies.context";

import MovieList from "components/MovieList";

const MovieBox: React.FC = () => {
  const { movies } = useMoviesContext();

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default MovieBox;
