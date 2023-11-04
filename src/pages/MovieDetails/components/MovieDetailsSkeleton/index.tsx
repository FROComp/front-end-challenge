import React from "react";

import SkeletonSquare from "components/SkeletonSquare";

import * as S from "./styles";
import * as BannerLayout from "components/DetailsBanner/styles";
import * as CardListLayout from "components/CastList/styles";

import Header from "components/Header";

const DetailsBannerSkeleton: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <BannerLayout.Wrapper>
        <SkeletonSquare
          width="383px"
          height="574px"
          widthSm="340px"
          heightSm="350px"
        />

        <BannerLayout.DetailsContent>
          <BannerLayout.DetailsTitle>
            <SkeletonSquare
              width="300px"
              height="30px"
              widthSm="200px"
              heightSm="20px"
            />
          </BannerLayout.DetailsTitle>

          <BannerLayout.DetailsInfo>
            <SkeletonSquare width="100%" height="25px" />
          </BannerLayout.DetailsInfo>

          <SkeletonSquare width="150px" height="70px" />

          <BannerLayout.DetailsSinopse>
            <SkeletonSquare width="110px" height="30px" />
          </BannerLayout.DetailsSinopse>

          <BannerLayout.DetailsInfo>
            <SkeletonSquare width="100%" height="25px" />
          </BannerLayout.DetailsInfo>

          <BannerLayout.DetailsInfo>
            <SkeletonSquare width="100%" height="25px" />
          </BannerLayout.DetailsInfo>

          <BannerLayout.DetailsInfo>
            <SkeletonSquare width="100%" height="25px" />
          </BannerLayout.DetailsInfo>
        </BannerLayout.DetailsContent>
      </BannerLayout.Wrapper>

      <CardListLayout.Wrapper>
        <CardListLayout.Title>
          <SkeletonSquare width="300px" height="30px" />
        </CardListLayout.Title>
        <CardListLayout.CardsWrapper>
          <SkeletonSquare
            width="175px"
            height="220px"
            widthSm="400px"
            heightSm="300px"
          />
          <SkeletonSquare
            width="175px"
            height="220px"
            widthSm="400px"
            heightSm="300px"
          />
          <SkeletonSquare
            width="175px"
            height="220px"
            widthSm="400px"
            heightSm="300px"
          />
        </CardListLayout.CardsWrapper>
      </CardListLayout.Wrapper>
    </S.Wrapper>
  );
};

export default DetailsBannerSkeleton;
