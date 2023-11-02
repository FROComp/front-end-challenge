import React from "react";

import Header from "components/Header";
import FilterBanner from "components/FilterBanner";
import MovieList from "components/MovieList";
import Pagination from "components/Pagination";

import * as S from "./styles";

const Movies: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <FilterBanner />
      <MovieList />
      <Pagination />
    </S.Wrapper>
  );
};

export default Movies;
