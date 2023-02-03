import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";

export const Box = styled.div`
  ${mq.tablet} {
    height: 100%;
    display: flex;
  }
`;
