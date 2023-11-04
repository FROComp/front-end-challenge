import styled from "styled-components";
import colors from "styles/colors";

import {
  spacingInlineXs,
  spacingInlineSm,
  spacingInlineLg,
  fontWeightBold,
} from "styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 112px;
  width: 100%;

  @media (max-width: 768px) {
    padding: ${spacingInlineLg} ${spacingInlineXs};
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: ${spacingInlineXs};
  margin-bottom: ${spacingInlineSm};
  overflow-x: scroll;
  width: 100%;
`;

export const Title = styled.p`
  color: ${colors.textDeep};
  font-size: 28px;
  font-weight: ${fontWeightBold};
  margin-bottom: ${spacingInlineSm};
  width: 100%;
`;
