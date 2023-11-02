import React from "react";

import MovieCard from "components/MovieCard";

import imageTemplate from "assets/card-template.png";

import * as S from "./styles";

const movies = [
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    image: imageTemplate,
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
];

const MovieList: React.FC = () => {
  return (
    <S.Wrapper>
      {movies.map((movie) => (
        <MovieCard
          image={movie.image}
          title={movie.original_title}
          release={movie.release_date}
        />
      ))}
    </S.Wrapper>
  );
};

export default MovieList;
