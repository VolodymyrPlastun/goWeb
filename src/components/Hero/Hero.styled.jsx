import styled from "styled-components";
import {btn} from '../../baseStyles/baseStyles';
import { mq } from "../../baseStyles/mediaQueries";
import { colors } from "../../baseStyles/variables";

export const Box = styled.div`
`;

export const Title = styled.h1`

font-weight: 600;
font-size: 55px;
line-height: 1.36;
text-align: center;
padding: 0 20px;
margin-bottom: 16px;
color: ${colors.mainText};
${mq.mobileOnly} {
    font-size: 40px;
line-height: 1.35;
}
`;

export const Text = styled.p`
font-size: 40px;
line-height: 1.35;
text-align: center;
margin-bottom: 24px;
color: ${colors.mainText};
${mq.tabletOnly} {
    max-width: 523px;
    margin: 0 auto 24px;
    line-height: 1.2;
}
${mq.mobileOnly} {
    font-size: 26px;
line-height: 1.23;
}
`;

export const Button = styled.button`
${btn}
margin: 0 auto;
`;

export const Icon = styled.svg`
fill: ${colors.whiteBg};
margin-right: 8px;
`;