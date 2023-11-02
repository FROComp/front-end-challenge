import styled from "styled-components";
import colors from "styles/colors";

import {
  spacingInlineXs,
  spacingInlineLg,
  fontSizeMd,
  fontSizeXxl,
} from "styles/tokens";

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${colors.red};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 85px 0;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    padding: ${spacingInlineLg} ${spacingInlineXs};
  }
`;

export const Title = styled.h1`
  color: ${colors.textWhite};
  font-size: ${fontSizeXxl};
  text-align: center;
  width: 781px;

  @media (max-width: 768px) {
    font-size: ${fontSizeMd};
    text-align: left;
    width: 100%;
  }
`;
