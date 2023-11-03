import React from "react";

import FilterButton from "components/FilterButton";

import { useMoviesContext } from "contexts/movies.context";

import * as S from "./styles";

const FilterBar: React.FC = () => {
  const { genres, filters, handleSetGenresFilter } = useMoviesContext();

  return (
    <S.Wrapper>
      <S.Label>Filtre por:</S.Label>
      <S.ButtonsContainer>
        {genres.map((genre) => (
          <FilterButton
            {...genre}
            key={genre.id}
            isSelected={filters.genresIds.includes(genre.id)}
            handleClick={handleSetGenresFilter}
          />
        ))}
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default FilterBar;
