import React from "react";

import { useMoviesContext } from "contexts/movies.context";

import MovieList from "components/MovieList";
import MovieBoxSkeleton from "../MovieBoxSkeleton";

const MovieBox: React.FC = () => {
  const { movies, contentIsLoading } = useMoviesContext();

  return (
    <>
      {contentIsLoading ? <MovieBoxSkeleton /> : <MovieList movies={movies} />}
    </>
  );
};

export default MovieBox;
