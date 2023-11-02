import styled from "styled-components";
import colors from "styles/colors";

import {
  spacingInlineXxs,
  spacingInlineSm,
  spacingInlineLg,
  fontSizeSm,
} from "styles/tokens";

interface IPaginationButtonProps {
  $isSelected?: boolean;
}

export const Wrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  gap: ${spacingInlineXxs};
  justify-content: center;
  padding: ${spacingInlineSm} ${spacingInlineSm} ${spacingInlineLg};
  width: 100%;
`;

export const PaginationButton = styled.button<IPaginationButtonProps>`
  background-color: ${(props) =>
    props.$isSelected ? colors.red : colors.background};
  border: none;
  border-radius: 21px;
  color: ${(props) => (props.$isSelected ? colors.textWhite : colors.purple)};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizeSm};
  justify-content: center;
  padding: ${spacingInlineXxs} 0;
  width: 42px;

  img {
    svg {
      filter: ${colors.background};
    }
  }

  &:hover {
    background-color: ${colors.red};
    border-radius: 21px;
    color: ${colors.textWhite};
  }
`;

export const AroundButton = styled.button`
  background-color: ${colors.background};
  border: none;
  color: ${colors.purple};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizeSm};
  justify-content: center;
  padding: ${spacingInlineXxs} 0;

  &:hover {
    color: ${colors.red};
  }
`;
