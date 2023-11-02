import React from "react";

import * as S from "./styles";

interface IMovieCardProps {
  image: string;
  title: string;
  release: string;
}

const MovieCard: React.FC<IMovieCardProps> = ({ image, title, release }) => {
  return (
    <S.Box>
      <S.ImageContent>
        <img src={image} alt="Imagem do filme" />
      </S.ImageContent>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.ReleaseDate>{release}</S.ReleaseDate>
      </S.TextContent>
    </S.Box>
  );
};

export default MovieCard;
