import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.header`
  align-items: center;
  background-color: ${colors.pink};
  display: flex;
  height: 56px;
  overflow: hidden;
  padding: 0 112px;
  width: 100vw;

  img {
    width: 185px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;

    img {
      width: 140px;
    }
  }
`;
