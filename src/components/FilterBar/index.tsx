import React from "react";

import FilterButton from "components/FilterButton";

import * as S from "./styles";

const dates = [
  {
    label: "Ação",
    value: "action",
  },
  {
    label: "Aventura",
    value: "action",
  },
  {
    label: "Animação",
    value: "action",
  },
  {
    label: "Comédia",
    value: "action",
  },
  {
    label: "Crime",
    value: "action",
  },
  {
    label: "Documentário",
    value: "action",
  },
  {
    label: "Drama",
    value: "action",
  },
  {
    label: "Família",
    value: "action",
  },
  {
    label: "Fantasia",
    value: "action",
  },
  {
    label: "História",
    value: "action",
  },
  {
    label: "Terror",
    value: "action",
  },
  {
    label: "Música",
    value: "action",
  },
  {
    label: "Mistério",
    value: "action",
  },
  {
    label: "Romance",
    value: "action",
  },
  {
    label: "Ficcção científica",
    value: "action",
  },
  {
    label: "Cinema TV",
    value: "action",
  },
  {
    label: "Thriller",
    value: "action",
  },
  {
    label: "Guerra",
    value: "action",
  },
  {
    label: "Faroeste",
    value: "action",
  },
];

const FilterBar: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Label>Filtre por:</S.Label>
      <S.ButtonsContainer>
        {dates.map((date) => (
          <FilterButton
            label={date.label}
            isSelected={false}
            onClick={() => null}
          />
        ))}
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default FilterBar;
