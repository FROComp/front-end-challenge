import React from "react";

import card from "assets/card-template.png";

import * as S from "./styles";

const DetailsBanner: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Poster src={card} alt="Porter do filme" />
      <S.DetailsContent>
        <S.DetailsTitle>Deadpool (2016)</S.DetailsTitle>
        <S.DetailsInfo>
          16 anos • 11/02/2016 (BR) • Ação, Aventura, Comédia, Ficção científica
          • 1h 47m
        </S.DetailsInfo>
      </S.DetailsContent>
    </S.Wrapper>
  );
};

export default DetailsBanner;
