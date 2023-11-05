import React from "react";

import AverageGraph from "components/AverageGraph";

import useDetailsBanner from "./hook";

import * as S from "./styles";

const DetailsBanner: React.FC = () => {
  const { poster, title, info, average, sinopse, crew } = useDetailsBanner();

  return (
    <S.Wrapper>
      <S.Poster src={poster} alt="Porter do filme" loading="lazy" />
      <S.DetailsContent>
        <S.DetailsTitle>{title}</S.DetailsTitle>

        <S.DetailsInfo>{info}</S.DetailsInfo>

        <AverageGraph percentage={average} />

        <S.DetailsSinopse>Sinopse</S.DetailsSinopse>

        <S.DetailsDescription>{sinopse}</S.DetailsDescription>

        <S.DetailsTeamBox>
          {crew?.map((crew) => (
            <S.DetailsTeam key={crew.id}>
              <S.DetailsTeamName>{crew.original_name}</S.DetailsTeamName>
              <S.DetailsTeamRole>{crew.job}</S.DetailsTeamRole>
            </S.DetailsTeam>
          ))}
        </S.DetailsTeamBox>
      </S.DetailsContent>
    </S.Wrapper>
  );
};

export default DetailsBanner;
