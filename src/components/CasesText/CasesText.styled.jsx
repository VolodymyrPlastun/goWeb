import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";
import { colors } from "../../baseStyles/variables";

export const Box = styled.div`
  padding: 78px 0 30px;
  text-align: center;
  color: ${colors.blackText};

  ${mq.mobileOnly} {
    padding: 156px 56px 31px 56px;
  }
`;

export const UpperText = styled.p`
  margin-bottom: 16px;
  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
  ${mq.desktop} {
    line-height: 1.83;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  ${mq.mobileOnly} {
    font-size: 32px;
    line-height: 1.37;
  }
  ${mq.tablet} {
    font-size: 40px;
    line-height: 1.35;
  }
  ${mq.desktop} {
    line-height: 1.2;
  }
`;

export const LowerText = styled.p`
  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
`;
