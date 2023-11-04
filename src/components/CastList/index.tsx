import React from "react";

import CastCard from "components/CastCard";

import * as S from "./styles";

const casts = [
  {
    id: 1,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
  {
    id: 2,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
  {
    id: 3,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
  {
    id: 4,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
  {
    id: 5,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
  {
    id: 6,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
  {
    id: 7,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
  {
    id: 8,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
  {
    id: 9,
    profile_path: "/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    original_name: "Ryan Reynolds",
    character: "Wade Wilson / Deadpool",
  },
];

const CastList: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Elenco original</S.Title>
      <S.CardsWrapper>
        {casts.map((cast) => (
          <CastCard
            key={cast.id}
            profile_path={cast.profile_path}
            original_name={cast.original_name}
            character={cast.character}
          />
        ))}
      </S.CardsWrapper>
    </S.Wrapper>
  );
};

export default CastList;
