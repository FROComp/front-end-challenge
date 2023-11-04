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
  padding: 0 112px 72px;
  width: 100%;

  @media (max-width: 768px) {
    padding: ${spacingInlineLg} ${spacingInlineXs};
  }
`;

export const Title = styled.p`
  color: ${colors.textDeep};
  font-size: 28px;
  font-weight: ${fontWeightBold};
  margin-bottom: ${spacingInlineSm};
  width: 100%;
`;

export const PlayerBoxWeb = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const PlayerMobile = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;
