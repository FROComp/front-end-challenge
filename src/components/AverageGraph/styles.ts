import styled from "styled-components";
import colors from "styles/colors";

import { spacingInlineXs, fontSizeXs } from "styles/tokens";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  margin-bottom: ${spacingInlineXs};
`;

export const CircleBackground = styled.circle`
  fill: rgba(255, 255, 255, 0.1);
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: ${colors.green};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const ProgressText = styled.text`
  fill: ${colors.green};
  font-size: ${fontSizeXs};
  font-weight: bold;
`;

export const AssessmentText = styled.p`
  color: ${colors.textWhite};
  font-size: ${fontSizeXs};
  width: 102px;
`;
