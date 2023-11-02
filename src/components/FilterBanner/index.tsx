import React from "react";

import FilterBar from "components/FilterBar";

import * as S from "./styles";

const FilterBanner: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </S.Title>
      <FilterBar />
    </S.Wrapper>
  );
};

export default FilterBanner;
