import React from "react";

import { useNavigate } from "react-router-dom";

import { formatDateToText } from "utils/formatDate";

import * as S from "./styles";
import posterByPathUrl from "utils/posterByPathUrl";

interface IMovieCardProps {
  id: number;
  poster: string;
  title: string;
  release: string;
}

const MovieCard: React.FC<IMovieCardProps> = ({
  id,
  poster,
  title,
  release,
}) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate({
      pathname: `details/${id}`,
    });
  };

  const image = posterByPathUrl(poster);

  return (
    <S.Box onClick={handleDetails}>
      <S.ImageContent>
        <img src={image} alt="Imagem do filme" loading="lazy" />
      </S.ImageContent>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.ReleaseDate>{formatDateToText(release)}</S.ReleaseDate>
      </S.TextContent>
    </S.Box>
  );
};

export default MovieCard;
