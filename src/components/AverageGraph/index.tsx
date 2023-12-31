import React from "react";

import colors from "styles/colors";

import * as S from "./styles";

interface IAverage {
  percentage: number;
}

const AverageGraph: React.FC<IAverage> = ({ percentage }) => {
  const sqSize = 60;
  const strokeWidth = 6;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  const handleColor = () => {
    if (percentage < 33) return colors.red;
    if (percentage > 33 && percentage < 66) return colors.yellow;
    return colors.green;
  };

  const color = handleColor();

  return (
    <S.Wrapper>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <S.CircleBackground
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <S.CircleProgress
          $color={color}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <S.ProgressText
          $color={color}
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </S.ProgressText>
      </svg>
      <S.AssessmentText>Avaliação dos usuários</S.AssessmentText>
    </S.Wrapper>
  );
};

export default AverageGraph;
