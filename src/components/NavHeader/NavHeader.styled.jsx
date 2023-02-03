import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";

export const Icon = styled.svg`
  margin-right: 8px;
`;

export const Container = styled.div`
  ${mq.mobileOnly} {
    padding-top: 22px;
    margin-left: 24px;
    margin-bottom: 16px;
  }

  display: flex;
  align-items: center;
  transition: 0.3s ease-in-out 0s;
  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  line-height: 1.37;
  color: #fff;
  ${mq.mobileOnly} {
    font-size: 28px;
    line-height: 1.35;
  }
`;

export const Span = styled.span`
  margin-right: 8px;
  color: #28a745;
`;
