import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";

export const Box = styled.div`
  ${mq.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`;
