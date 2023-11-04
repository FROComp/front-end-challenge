import styled from "styled-components";
import colors from "styles/colors";

import {
  fontSizeXs,
  spacingInlineXxs,
  spacingInlineSm,
  borderRadiusSm,
  fontWeightRegular,
  fontWeightBold,
} from "styles/tokens";

export const Box = styled.div`
  padding: ${spacingInlineXxs};
  background-color: ${colors.background};
  border-radius: ${borderRadiusSm};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 174px;
  max-width: 174px;
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

export const Character = styled(Text)`
  color: ${colors.textGrey};
  font-weight: ${fontWeightRegular};
`;
