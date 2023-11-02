import styled from "styled-components";
import colors from "styles/colors";

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
    padding: 40px 16px;
  }
`;

export const Title = styled.h1`
  color: ${colors.textWhite};
  font-size: 48px;
  text-align: center;
  width: 781px;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: left;
    width: 100%;
  }
`;
