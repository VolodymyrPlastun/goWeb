import styled from "styled-components";
import { colors } from "../../baseStyles/variables";
import { mq } from "../../baseStyles/mediaQueries";
import { Link as link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  position: relative;
  color: ${colors.mainText};
  &:not(:last-child) {
    margin-right: 20px;
  }
  ${mq.mobileOnly} {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 0.7;
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-color: ${colors.greenBg};
    }
  }
`;

export const Links = styled(link)`
  display: block;
  padding-bottom: 10px;
  padding-top: 10px;
  ${mq.mobileOnly} {
    font-size: 16px;
    line-height: 1.37;
  }
`;
