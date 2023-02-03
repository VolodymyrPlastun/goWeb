import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";

export const Box = styled.div`
  ${mq.mobileOnly} {
    padding: 0 20px;
    padding-bottom: 150px;
  }
  ${mq.tablet} {
    padding-bottom: 100px;
  }
`;

export const List = styled.ul`
  display: grid;
  justify-content: center;

  ${mq.mobileOnly} {
    grid-template-columns: 100%;
    gap: 8px;
  }
  ${mq.tablet} {
    grid-template-columns: 223px 223px 223px;
    gap: 18px;
  }
  ${mq.desktop} {
    grid-template-columns: 421px 421px 421px;
    gap: 20px;
  }
`;

export const Item = styled.li`
  &:hover,
  &:focus {
    opacity: 0.4;
  }
`;

export const Img = styled.img``;
