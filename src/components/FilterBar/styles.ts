import styled from "styled-components";
import colors from "styles/colors";

import {
  spacingInlineXxs,
  spacingInlineXs,
  spacingInlineLg,
  fontSizeXxs,
} from "styles/tokens";

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${colors.red};
  display: flex;
  flex-direction: column;
  margin-top: ${spacingInlineLg};
  max-width: 1033px;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    max-width: 100%;
    padding: 0;
  }
`;

export const Label = styled.p`
  color: ${colors.textWhite};
  font-size: ${fontSizeXxs};
  margin-bottom: ${spacingInlineXs};
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: ${spacingInlineXxs};
    text-align: left;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
