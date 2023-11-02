import React from "react";

import logo from "assets/logo.svg";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <img src={logo} alt="Logo do site" />
    </S.Wrapper>
  );
};

export default Header;
