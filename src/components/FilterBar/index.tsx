import React from "react";

import FilterButton from "components/FilterButton";

import { useMoviesContext } from "contexts/movies.context";

import * as S from "./styles";

const FilterBar: React.FC = () => {
  const { genres } = useMoviesContext();

  return (
    <S.Wrapper>
      <S.Label>Filtre por:</S.Label>
      <S.ButtonsContainer>
        {genres.map((genre) => (
          <FilterButton
            key={genre.id}
            id={genre.id}
            name={genre.name}
            isSelected={false}
            handleClick={() => null}
          />
        ))}
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default FilterBar;
