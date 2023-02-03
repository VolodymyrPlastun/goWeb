import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";
import { colors } from "../../baseStyles/variables";

export const Box = styled.div`
  text-align: center;
  color: ${colors.blackText};
  ${mq.mobileOnly} {
    padding: 156px 20px 63px 20px;
  }
  ${mq.tablet} {
    padding-bottom: 24px;
  }
`;

export const UpperText = styled.p`
  margin-bottom: 16px;
  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
  ${mq.tablet} {
    font-size: 20px;
    line-height: 1.65;
  }
  ${mq.desktop} {
    line-height: 1.35;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 1.35;
  margin-bottom: 24px;

  ${mq.mobileOnly} {
    font-size: 32px;
    line-height: 1.37;
  }
`;

export const LowerText = styled.p`
  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
`;
