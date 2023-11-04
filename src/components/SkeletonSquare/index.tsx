import React from "react";

import * as S from "./styles";

interface ISkeletonSquareProps {
  width: string;
  height: string;
  widthSm?: string;
  heightSm?: string;
}

const SkeletonSquare: React.FC<ISkeletonSquareProps> = ({
  width,
  height,
  widthSm,
  heightSm,
}) => {
  return (
    <S.Square
      $width={width}
      $height={height}
      $widthSm={widthSm}
      $heightSm={heightSm}
    />
  );
};

export default SkeletonSquare;
