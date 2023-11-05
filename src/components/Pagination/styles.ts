import styled from "styled-components";
import colors from "styles/colors";

import {
  spacingInlineXxs,
  spacingInlineSm,
  spacingInlineLg,
  fontSizeXs,
  fontSizeSm,
} from "styles/tokens";

interface IPaginationButtonProps {
  $isSelected?: boolean;
}

export const Wrapper = styled.div`
  background-color: ${colors.background};
  padding: ${spacingInlineSm} ${spacingInlineSm} ${spacingInlineLg};
  width: 100%;
`;

export const PaginationButtonsBox = styled.div`
  display: flex;
  gap: ${spacingInlineXxs};
  justify-content: center;
  overflow-x: scroll;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0;
    justify-content: flex-start;
  }
`;

export const PaginationButton = styled.button<IPaginationButtonProps>`
  align-items: center;
  background-color: ${(props) =>
    props.$isSelected ? colors.red : colors.background};
  border: none;
  border-radius: 42px;
  color: ${(props) => (props.$isSelected ? colors.textWhite : colors.purple)};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizeSm};
  justify-content: center;
  padding: ${spacingInlineXxs} 0;
  min-width: 42px;
  min-height: 42px;

  &:hover {
    background-color: ${colors.red};
    border-radius: 21px;
    color: ${colors.textWhite};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizeXs};
  }
`;

export const AroundButton = styled.button`
  align-items: center;
  background-color: ${colors.background};
  border: none;
  color: ${colors.purple};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizeSm};
  justify-content: center;

  &:hover {
    color: ${colors.red};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizeXs};
  }
`;
