import React from "react";

import {
  useDetailsContext,
  withDetailsContext,
} from "contexts/details.context";

import SEO from "components/SEO";
import Header from "components/Header";
import DetailsBanner from "components/DetailsBanner";
import CastList from "components/CastList";
import TrailerMovie from "components/TrailerMovie";
import RecommendationsList from "components/RecommendationsList";

import MovieDetailsSkeleton from "./components/MovieDetailsSkeleton";

import * as S from "./styles";

const MoviesDetails: React.FC = () => {
  const { detailsIsLoading, metas } = useDetailsContext();

  return (
    <>
      <SEO title="TMDB Videos" metas={metas} />
      {detailsIsLoading ? (
        <MovieDetailsSkeleton />
      ) : (
        <S.Wrapper>
          <Header />
          <DetailsBanner />
          <CastList />
          <TrailerMovie />
          <RecommendationsList />
        </S.Wrapper>
      )}
    </>
  );
};

export default withDetailsContext(MoviesDetails);
