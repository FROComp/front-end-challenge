import styled from "styled-components";
import colors from "styles/colors";

import { fontSizeXs, spacingInlineSm, fontWeightBold } from "styles/tokens";

export const Box = styled.a`
  background-color: ${colors.background};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  width: 100%;
`;

export const ImageContent = styled.div`
  img {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: ${fontSizeXs};
  font-weight: ${fontWeightBold};
  line-height: ${spacingInlineSm};
  width: 100%;
`;

export const Title = styled(Text)`
  color: ${colors.textDark};
`;

export const ReleaseDate = styled(Text)`
  color: ${colors.textGrey};
`;
