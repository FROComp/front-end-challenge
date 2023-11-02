import styled from "styled-components";
import colors from "styles/colors";

interface IButtonProps {
  $isSelected: boolean;
}

export const Button = styled.button<IButtonProps>`
  align-items: center;
  background-color: ${(props) =>
    props.$isSelected ? colors.yellow : colors.background};
  border: none;
  border-radius: 4px;
  color: ${(props) => (props.$isSelected ? colors.textWhite : colors.textDeep)};
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: center;
  line-height: 24px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 768px) {
    padding: 6px 16px;
  }
`;
