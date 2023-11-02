import React, { useState, useMemo } from "react";

import * as S from "./styles";

import arrowLeft from "assets/arrow-left.svg";
import arrowRight from "assets/arrow-right.svg";

const maxPages = 100;
const range = 5;

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (page: number) => {
    if (page < 1 || page > maxPages) return;
    setCurrentPage(page);
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
    () => arrayRange(currentPage, maxPages),
    [currentPage, maxPages]
  );

  return (
    <S.Wrapper>
      {currentPage > 2 && (
        <S.AroundButton onClick={() => handleChangePage(1)}>
          Primeira
        </S.AroundButton>
      )}
      {currentPage > 1 && (
        <S.PaginationButton onClick={() => handleChangePage(currentPage - 1)}>
          <img src={arrowLeft} alt="Próxima anterior" />
        </S.PaginationButton>
      )}
      {pages.map((page) => (
        <S.PaginationButton
          $isSelected={currentPage === page}
          onClick={() => handleChangePage(page)}
        >
          {page}
        </S.PaginationButton>
      ))}
      {currentPage < maxPages && (
        <S.PaginationButton onClick={() => handleChangePage(currentPage + 1)}>
          <img src={arrowRight} alt="Próxima página" />
        </S.PaginationButton>
      )}
      {currentPage + 2 < maxPages && (
        <S.AroundButton onClick={() => handleChangePage(maxPages)}>
          Última
        </S.AroundButton>
      )}
    </S.Wrapper>
  );
};

export default Pagination;
