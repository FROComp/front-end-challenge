import React from "react";

import SkeletonSquare from "components/SkeletonSquare";

import * as S from "./styles";

const MovieBoxSkeleton: React.FC = () => {
  return (
    <S.Wrapper>
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
      <SkeletonSquare width="100%" height="300px" />
    </S.Wrapper>
  );
};

export default MovieBoxSkeleton;
