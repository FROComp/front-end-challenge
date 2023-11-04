import React from "react";

import * as S from "./styles";

import MovieList from "components/MovieList";

const movies = [
  {
    id: 1,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    id: 2,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    id: 3,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    id: 4,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    id: 5,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    id: 6,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    id: 7,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    id: 8,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
  {
    id: 9,
    poster_path: "/u9vctxUKeGRZ4x2Yiaqj2y3AeYv.jpg",
    original_title: "Uri: The Surgical Strike",
    release_date: "2019-01-11",
  },
];

const RecommendationsList: React.FC = () => {
  return (
    <>
      <S.Title>Recomendações</S.Title>
      <MovieList movies={movies} />
    </>
  );
};

export default RecommendationsList;
