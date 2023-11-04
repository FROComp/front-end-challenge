import React from "react";

import Youtube from "react-youtube";

import { useDetailsContext } from "contexts/details.context";

import * as S from "./styles";

const TrailerMovie: React.FC = () => {
  const { details } = useDetailsContext();

  const handleGetYtKey = () => {
    const videos = details?.videos?.results;

    if (videos?.length) return videos[0].key;

    return "";
  };

  const youtubeID = handleGetYtKey();

  const optsWeb = {
    height: "510",
    width: "907",
  };

  const optsMobile = {
    height: "182",
    width: "324",
  };

  return (
    <>
      {youtubeID && (
        <S.Wrapper>
          <S.Title>Trailer</S.Title>
          <S.PlayerBoxWeb>
            <Youtube videoId={youtubeID} opts={optsWeb} />
          </S.PlayerBoxWeb>

          <S.PlayerMobile>
            <Youtube videoId={youtubeID} opts={optsMobile} />
          </S.PlayerMobile>
        </S.Wrapper>
      )}
    </>
  );
};

export default TrailerMovie;
