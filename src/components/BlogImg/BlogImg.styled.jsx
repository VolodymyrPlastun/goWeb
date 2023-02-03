import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";

export const Img = styled.img`
  ${mq.tablet} {
    min-width: 370px;
    height: 100%;
  }
  ${mq.desktop} {
    min-width: 670px;
  }
  object-fit: cover;
`;
