import React from "react";

import card from "assets/card-template.png";

import AverageGraph from "components/AverageGraph";

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

        <AverageGraph percentage={50} />

        <S.DetailsSinopse>Sinopse</S.DetailsSinopse>

        <S.DetailsDescription>
          Baseado no anti-herói não convencional da Marvel Comics, Deadpool
          conta a história da origem do ex-agente das Forças Especiais que se
          tornou o mercenário Wade Wilson. Depois de ser submetido a um
          desonesto experimento que o deixa com poderes de cura acelerada, Wade
          adota o alter ego de Deadpool. Armado com suas novas habilidades e um
          senso de humor negro e distorcido, Deadpool persegue o homem que quase
          destruiu sua vida.
        </S.DetailsDescription>

        <S.DetailsTeamBox>
          <S.DetailsTeam>
            <S.DetailsTeamName>Rob Liefeld</S.DetailsTeamName>
            <S.DetailsTeamRole>Characters</S.DetailsTeamRole>
          </S.DetailsTeam>

          <S.DetailsTeam>
            <S.DetailsTeamName>Rob Liefeld</S.DetailsTeamName>
            <S.DetailsTeamRole>Characters</S.DetailsTeamRole>
          </S.DetailsTeam>

          <S.DetailsTeam>
            <S.DetailsTeamName>Rob Liefeld</S.DetailsTeamName>
            <S.DetailsTeamRole>Characters</S.DetailsTeamRole>
          </S.DetailsTeam>

          <S.DetailsTeam>
            <S.DetailsTeamName>Rob Liefeld</S.DetailsTeamName>
            <S.DetailsTeamRole>Characters</S.DetailsTeamRole>
          </S.DetailsTeam>
        </S.DetailsTeamBox>
      </S.DetailsContent>
    </S.Wrapper>
  );
};

export default DetailsBanner;
