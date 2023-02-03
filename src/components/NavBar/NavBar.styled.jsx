import styled from "styled-components";
import { mq } from "../../baseStyles/mediaQueries";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 999;
  background-image: linear-gradient(
    rgba(18, 17, 17, 0.5),
    rgba(139, 139, 139, 0.5)
  );
  ${mq.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
  }
`;
