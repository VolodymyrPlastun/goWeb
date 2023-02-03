import styled from "styled-components";
import { btn } from "../../baseStyles/baseStyles";
import { mq } from "../../baseStyles/mediaQueries";
import { colors } from "../../baseStyles/variables";

export const Box = styled.div`
  ${mq.mobileOnly} {
    padding: 79px 20px 150px 20px;
  }
  ${mq.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 32px 50px 32px;
  }
  ${mq.desktop} {
    padding: 0 24px;
  }
  background-color: ${colors.greenBg};
`;

export const SecTitle = styled.h3`
  font-weight: 400;
  margin-bottom: 16px;
  color: ${colors.mainText};
  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${colors.mainText};

  ${mq.mobileOnly} {
    font-size: 32px;
    line-height: 1.37;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
  color: ${colors.mainText};

  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
`;

export const Button = styled.button`
  ${btn}
  ${mq.tablet} {
    max-width: 156px;
    max-height: 57px;
    padding-left: 0;
    padding-right: 0;
  }
`;
