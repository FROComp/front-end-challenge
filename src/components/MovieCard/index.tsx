import React from "react";

import { useNavigate } from "react-router-dom";

import * as S from "./styles";

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

  const handleGetMoviePosterUrl = (posterPath: string): string =>
    `${import.meta.env.VITE_IMAGE_API_URL}/${posterPath}`;

  const handleDetails = () => {
    navigate({
      pathname: `details/${id}`,
    });
  };

  const image = handleGetMoviePosterUrl(poster);

  return (
    <S.Box onClick={handleDetails}>
      <S.ImageContent>
        <img src={image} alt="Imagem do filme" loading="lazy" />
      </S.ImageContent>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.ReleaseDate>{release}</S.ReleaseDate>
      </S.TextContent>
    </S.Box>
  );
};

export default MovieCard;
