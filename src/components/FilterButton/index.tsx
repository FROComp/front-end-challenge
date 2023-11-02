import React from "react";

import close from "assets/close-circle.svg";

import * as S from "./styles";

interface IFilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<IFilterButtonProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  return (
    <S.Button $isSelected={isSelected} onClick={onClick}>
      {label}
      {isSelected && <img src={close} alt="Botão de fechar" />}
    </S.Button>
  );
};

export default FilterButton;
