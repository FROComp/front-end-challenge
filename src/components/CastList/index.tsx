import React from "react";

import { useDetailsContext } from "contexts/details.context";

import CastCard from "components/CastCard";

import * as S from "./styles";

const CastList: React.FC = () => {
  const { details } = useDetailsContext();

  return (
    <S.Wrapper>
      <S.Title>Elenco original</S.Title>

      <S.CardsWrapper>
        {details?.credits?.cast?.map((cast) => (
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
