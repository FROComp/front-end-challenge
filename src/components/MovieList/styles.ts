import styled from "styled-components";
import colors from "styles/colors";

import {
  spacingInlineXs,
  spacingInlineSm,
  spacingInlineMd,
  spacingInlineLg,
} from "styles/tokens";

export const Wrapper = styled.div`
  background-color: ${colors.background};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${spacingInlineMd};
  justify-items: center;
  padding: ${spacingInlineSm} 112px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${spacingInlineLg} ${spacingInlineXs};
  }

  @media ((min-width: 768px) and (max-width: 1200px)) {
    grid-template-columns: repeat(3, 1fr);
    padding: ${spacingInlineLg} ${spacingInlineXs};
  }
`;
