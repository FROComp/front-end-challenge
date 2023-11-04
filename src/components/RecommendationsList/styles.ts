import styled from "styled-components";
import colors from "styles/colors";

import { spacingInlineXs, fontWeightBold } from "styles/tokens";

export const Title = styled.p`
  color: ${colors.textDeep};
  font-size: 28px;
  font-weight: ${fontWeightBold};
  padding: 0 112px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 ${spacingInlineXs};
  }
`;
