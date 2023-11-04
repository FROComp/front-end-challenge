import React from "react";

import * as S from "./styles";

interface ISkeletonSquareProps {
  width: string;
  height: string;
}

const SkeletonSquare: React.FC<ISkeletonSquareProps> = ({ width, height }) => {
  return <S.Square $width={width} $height={height} />;
};

export default SkeletonSquare;
