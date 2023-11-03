import React from "react";

import close from "assets/close-circle.svg";

import * as S from "./styles";

interface IFilterButtonProps {
  id: number;
  name: string;
  isSelected: boolean;
  handleClick: (id: number) => void;
}

const FilterButton: React.FC<IFilterButtonProps> = ({
  id,
  name,
  isSelected,
  handleClick,
}) => {
  return (
    <S.Button $isSelected={isSelected} onClick={() => handleClick(id)}>
      {name}
      {isSelected && <img src={close} alt="Botão de fechar" />}
    </S.Button>
  );
};

export default FilterButton;
