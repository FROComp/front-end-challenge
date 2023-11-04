import React from "react";

import MoviesProvider from "contexts/movies.context";

import Header from "components/Header";
import FilterBanner from "components/FilterBanner";
import MovieBox from "./components/MoviesBox";
import Pagination from "components/Pagination";

import * as S from "./styles";

const Movies: React.FC = () => {
  return (
    <MoviesProvider>
      <S.Wrapper>
        <Header />
        <FilterBanner />
        <MovieBox />
        <Pagination />
      </S.Wrapper>
    </MoviesProvider>
  );
};

export default Movies;
