import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";
import img from "../../images/home/showcase.jpg";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${mq.mobileOnly} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
