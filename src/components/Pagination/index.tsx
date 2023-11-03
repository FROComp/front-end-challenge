import React, { useMemo } from "react";

import { useMoviesContext } from "contexts/movies.context";

import * as S from "./styles";

import arrowLeft from "assets/arrow-left.svg";
import arrowRight from "assets/arrow-right.svg";

const range = 5;

const Pagination: React.FC = () => {
  const { filters, handleSetPageFilter } = useMoviesContext();

  const handleChangePage = (page: number) => {
    if (page < 1 || page > filters.maxPages) return;
    handleSetPageFilter(page);
  };

  const arrayRange = (start: number, stop: number) => {
    if (stop - start < range) {
      const newStart = stop - range;
      return Array.from(
        { length: newStart },
        (_, index) => newStart + index
      ).slice(0, range);
    }

    return Array.from(
      { length: stop - start },
      (_, index) => start + index
    ).slice(0, range);
  };

  const pages = useMemo(
    () => arrayRange(filters.page, filters.maxPages),
    [filters.page, filters.maxPages]
  );

  return (
    <S.Wrapper>
      {filters.page > 2 && (
        <S.AroundButton onClick={() => handleChangePage(1)}>
          Primeira
        </S.AroundButton>
      )}
      {filters.page > 1 && (
        <S.PaginationButton onClick={() => handleChangePage(filters.page - 1)}>
          <img src={arrowLeft} alt="Próxima anterior" />
        </S.PaginationButton>
      )}
      {pages.map((page) => (
        <S.PaginationButton
          $isSelected={filters.page === page}
          onClick={() => handleChangePage(page)}
        >
          {page}
        </S.PaginationButton>
      ))}
      {filters.page < filters.maxPages && (
        <S.PaginationButton onClick={() => handleChangePage(filters.page + 1)}>
          <img src={arrowRight} alt="Próxima página" />
        </S.PaginationButton>
      )}
      {filters.page + 2 < filters.maxPages && (
        <S.AroundButton onClick={() => handleChangePage(filters.maxPages)}>
          Última
        </S.AroundButton>
      )}
    </S.Wrapper>
  );
};

export default Pagination;
