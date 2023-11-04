import styled from "styled-components";
import colors from "styles/colors";

import {
  spacingInlineXxs,
  spacingInlineXs,
  spacingInlineLg,
  spacingInlineMd,
  borderRadiusMd,
  fontSizeMd,
  fontSizeLg,
} from "styles/tokens";

export const Wrapper = styled.div`
  background-color: ${colors.red};
  display: flex;
  gap: ${spacingInlineMd};
  padding: 72px 112px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: ${spacingInlineLg} ${spacingInlineXs};
  }
`;

export const Poster = styled.img`
  align-self: center;
  border-radius: ${borderRadiusMd};
  height: 574px;
  margin-bottom: -120px;
  width: 383px;

  @media (max-width: 768px) {
    height: 279px;
    margin-bottom: 0;
    width: 186px;
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const DetailsTitle = styled.h1`
  color: ${colors.textWhite};
  font-size: ${fontSizeLg};
  margin-bottom: ${spacingInlineXxs};
  width: 100%;

  @media (max-width: 768px) {
    font-size: ${fontSizeMd};
    text-align: left;
    width: 100%;
  }
`;

export const DetailsInfo = styled.p`
  color: ${colors.textWhite};
  font-size: 18px;
`;
