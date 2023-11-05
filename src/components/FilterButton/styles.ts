import styled from "styled-components";
import colors from "styles/colors";

import {
  borderRadiusSm,
  spacingInlineXxs,
  spacingInlineXs,
  fontSizeXs,
  fontWeightBold,
} from "styles/tokens";

interface IButtonProps {
  $isSelected: boolean;
}

export const Button = styled.button<IButtonProps>`
  align-items: center;
  background-color: ${(props) =>
    props.$isSelected ? colors.yellow : colors.background};
  border: none;
  border-radius: ${borderRadiusSm};
  color: ${(props) => (props.$isSelected ? colors.textWhite : colors.textDeep)};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizeXs};
  font-weight: ${fontWeightBold};
  gap: ${spacingInlineXxs};
  height: 40px;
  justify-content: center;
  line-height: 24px;
  padding: ${spacingInlineXxs} ${spacingInlineXs};

  @media (max-width: 768px) {
    padding: 6px ${spacingInlineXs};
  }
`;
