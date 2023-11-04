import styled, { keyframes } from "styled-components";

interface ISquareProps {
  $width: string;
  $height: string;
  $widthSm?: string;
  $heightSm?: string;
}

const loading = keyframes`
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
`;

export const Square = styled.div<ISquareProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background: linear-gradient(90deg, #eeeeee 25%, #dedede 50%, #eeeeee 75%);
  background-size: 200% 100%;
  animation: ${loading} 2s infinite ease-in-out;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: ${(props) => props.$widthSm};
    height: ${(props) => props.$heightSm};
  }
`;
