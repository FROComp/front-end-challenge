import React from "react";

import * as S from "./styles";

interface ICastCardProps {
  profile_path: string;
  original_name: string;
  character: string;
}

const CastCard: React.FC<ICastCardProps> = ({
  profile_path,
  original_name,
  character,
}) => {
  const handleGetMoviePosterUrl = (posterPath: string): string =>
    `${import.meta.env.VITE_IMAGE_API_URL}/${posterPath}`;

  const image = handleGetMoviePosterUrl(profile_path);

  return (
    <S.Box>
      <S.ImageContent>
        <img src={image} alt="Imagem do ator" loading="lazy" />
      </S.ImageContent>
      <S.TextContent>
        <S.Title>{original_name}</S.Title>
        <S.Character>{character}</S.Character>
      </S.TextContent>
    </S.Box>
  );
};

export default CastCard;
