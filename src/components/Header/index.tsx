import React from "react";

import logo from "assets/logo.svg";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <a href="/">
        <img src={logo} alt="Logo do site" />
      </a>
    </S.Wrapper>
  );
};

export default Header;
