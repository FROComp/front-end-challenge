import React from "react";

import Youtube from "react-youtube";

import * as S from "./styles";

const TrailerMovie: React.FC = () => {
  const youtubeID = "Q9X-bAE8KTc"; //key

  const optsWeb = {
    height: "510",
    width: "907",
  };

  const optsMobile = {
    height: "182",
    width: "324",
  };

  return (
    <S.Wrapper>
      <S.Title>Elenco original</S.Title>
      <S.PlayerBoxWeb>
        <Youtube videoId={youtubeID} opts={optsWeb} />
      </S.PlayerBoxWeb>

      <S.PlayerMobile>
        <Youtube videoId={youtubeID} opts={optsMobile} />
      </S.PlayerMobile>
    </S.Wrapper>
  );
};

export default TrailerMovie;
