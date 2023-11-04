import React from "react";

import DetailsProvider from "contexts/details.context";

import Header from "components/Header";
import DetailsBanner from "components/DetailsBanner";
import CastList from "components/CastList";
import TrailerMovie from "components/TrailerMovie";
import RecommendationsList from "components/RecommendationsList";

import * as S from "./styles";

const MoviesDetails: React.FC = () => {
  return (
    <DetailsProvider>
      <S.Wrapper>
        <Header />
        <DetailsBanner />
        <CastList />
        <TrailerMovie />
        <RecommendationsList />
      </S.Wrapper>
    </DetailsProvider>
  );
};

export default MoviesDetails;
