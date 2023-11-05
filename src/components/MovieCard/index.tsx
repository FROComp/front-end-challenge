import React from "react";

import { formatDateToText } from "utils/formatDate";

import * as S from "./styles";
import posterByPathUrl from "utils/posterByPathUrl";

interface IMovieCardProps {
  id: number;
  poster: string;
  title: string;
  release: string;
  incompleteNavigate?: boolean;
}

const MovieCard: React.FC<IMovieCardProps> = ({
  id,
  poster,
  title,
  release,
  incompleteNavigate,
}) => {
  const image = posterByPathUrl(poster);

  return (
    <S.Box href={incompleteNavigate ? `${id}` : `details/${id}`}>
      <S.ImageContent>
        <img src={image} alt="Imagem do filme" loading="lazy" />
      </S.ImageContent>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        {release && <S.ReleaseDate>{formatDateToText(release)}</S.ReleaseDate>}
      </S.TextContent>
    </S.Box>
  );
};

export default MovieCard;
