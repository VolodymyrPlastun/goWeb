import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";
import { colors } from "../../baseStyles/variables";

export const Box = styled.footer`
  ${mq.mobileOnly} {
    padding: 20px 0;
  }
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(
    rgba(18, 17, 17, 0.5),
    rgba(139, 139, 139, 0.5)
  );
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mq.mobileOnly} {
    margin-bottom: 12px;
  }
  ${mq.tablet} {
    padding-top: 5px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const Icon = styled.svg`
  fill: ${colors.whiteBg};
  transition: 0.3s ease-in-out 0s;
  &:focus,
  &:hover {
    fill: ${colors.greenBg};
  }
`;

export const Text = styled.p`
  text-align: center;
  color: ${colors.mainText};
  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
  ${mq.tablet} {
    padding-bottom: 5px;
  }
`;
