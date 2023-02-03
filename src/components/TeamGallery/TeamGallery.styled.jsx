import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";
import { colors } from "../../baseStyles/variables";

export const Box = styled.div`
  ${mq.mobileOnly} {
    margin: 0 20px;
    padding-bottom: 150px;
  }
`;

export const List = styled.ul`
  display: grid;

  justify-content: center;

  ${mq.mobileOnly} {
    grid-template-columns: 100%;
    gap: 30px;
  }
  ${mq.tablet} {
    grid-template-columns: 223px 223px 223px;
    gap: 18px;
  }
  ${mq.desktop} {
    grid-template-columns: 420px 420px 420px;
    gap: 20px;
  }
`;

export const Item = styled.li``;

export const Overlay = styled.div`
  position: relative;
  transition: 0.3s ease-in-out 0s;
  &:hover,
  &:focus {
    scale: 1.02;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }
`;

export const Img = styled.img`
  margin-bottom: 16px;
`;

export const OverlayList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  &:hover,
  &:focus {
    background-color: ${colors.secBlackBg};
    opacity: 0.5;
  }
`;

export const OverlayItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const Icon = styled.svg`
  fill: ${colors.whiteBg};
  transition: 0.3s ease-in-out 0s;
  &:focus,
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 1;
  font-weight: 400;
  text-align: center;
  margin-bottom: 8px;
  color: ${colors.blackText};
  ${mq.mobileOnly} {
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const Text = styled.p`
  text-align: center;
  color: ${colors.blackText};

  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
`;
