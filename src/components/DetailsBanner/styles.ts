import styled from "styled-components";
import colors from "styles/colors";

import {
  spacingInlineXxs,
  spacingInlineXs,
  spacingInlineSm,
  spacingInlineMd,
  spacingInlineLg,
  borderRadiusMd,
  fontSizeXxs,
  fontSizeXs,
  fontSizeSm,
  fontSizeMd,
  fontSizeLg,
  fontWeightRegular,
} from "styles/tokens";

export const Wrapper = styled.div`
  background-color: ${colors.red};
  display: flex;
  justify-content: center;
  gap: ${spacingInlineMd};
  padding: 72px 112px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: ${spacingInlineLg} ${spacingInlineXs};
  }
`;

export const Poster = styled.img`
  align-self: center;
  border-radius: ${borderRadiusMd};
  height: 574px;
  margin-bottom: -120px;
  width: 383px;

  @media (max-width: 768px) {
    height: 279px;
    margin-bottom: 0;
    width: 186px;
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DetailsTitle = styled.h1`
  color: ${colors.textWhite};
  font-size: ${fontSizeLg};
  margin-bottom: ${spacingInlineXxs};
  width: 100%;

  @media (max-width: 768px) {
    font-size: ${fontSizeMd};
    text-align: left;
    width: 100%;
  }
`;

export const DetailsInfo = styled.p`
  color: ${colors.textWhite};
  font-size: 18px;
  margin-bottom: ${spacingInlineXs};

  @media (max-width: 768px) {
    margin-bottom: ${spacingInlineMd};
  }
`;

export const DetailsSinopse = styled.p`
  color: ${colors.textWhite};
  font-size: ${fontSizeSm};
  margin-bottom: ${spacingInlineXxs};

  @media (max-width: 768px) {
    margin-bottom: ${spacingInlineMd};
  }
`;

export const DetailsDescription = styled.p`
  color: ${colors.textWhite};
  font-size: ${fontSizeXs};
  font-weight: ${fontWeightRegular};
  margin-bottom: ${spacingInlineSm};

  @media (max-width: 768px) {
    margin-bottom: ${spacingInlineMd};
  }
`;

export const DetailsTeamBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const DetailsTeam = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsTeamName = styled(DetailsSinopse)`
  font-size: ${fontSizeXs};

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const DetailsTeamRole = styled(DetailsDescription)`
  font-size: ${fontSizeXxs};
`;
