import styled from "styled-components";
import { colors } from "../../baseStyles/variables";
import { input, btn } from "../../baseStyles/baseStyles";
import { mq } from "../../baseStyles/mediaQueries";

export const Box = styled.div`
  ${mq.mobileOnly} {
    padding: 51px 20px 150px 20px;
  }
  ${mq.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    min-width: 398px;
  }
  ${mq.desktop} {
    padding: 0 24px;
    min-width: 690px;
  }
  background-color: ${colors.darkWhiteBg};
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 1.35;
  color: ${colors.blackText};
  margin-bottom: 24px;
  ${mq.mobileOnly} {
    font-size: 32px;
    line-height: 1.5;
    margin-bottom: 69px;
  }
`;

export const Form = styled.form``;

export const Label = styled.label`
  position: absolute;
`;

export const FirstInput = styled.input`
  ${input}
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: red;
  margin-bottom: 5px;
`;

export const SecInput = styled.input`
  ${input}
  margin-bottom: 24px;
`;

export const Button = styled.button`
  ${btn}
  padding-left: 56px;
  padding-right: 56px;
`;
