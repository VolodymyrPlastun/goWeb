import { css } from "styled-components";
import { colors } from "./variables";
import { mq } from "./mediaQueries";

const chooseBtnVariant = (variant) => {
  switch (variant) {
    case "accent":
      return css`
        display: flex;
        align-items: center;
        background-color: ${colors.greenBg};
        color: ${colors.mainText};
        border: 1px solid transparent;

        &:hover,
        &:focus {
          background-color: ${colors.secGreen};
        }
      `;
    case "transparent":
    default:
      return css`
        background-color: transparent;
        color: ${colors.mainText};
        border: 1px solid ${colors.mainText};

        &:hover,
        &:focus {
          color: ${colors.greenText};
          background-color: ${colors.darkWhiteBg};
        }
      `;
  }
};

export const btn = ({ variant }) => {
  return css`
    ${chooseBtnVariant(variant)};
    font-family: inherit;
    font-size: 18px;
    line-height: 1.38;
    padding: 16px 32px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s ease-in-out 0s;

    ${mq.mobileOnly} {
      font-size: 16px;
      line-height: 1.37;
    }
  `;
};

export const input = () => {
  return css`
    display: block;
    width: 100%;
    padding: 16px 8px;
    background-color: ${colors.whiteBg};
    border: 1px solid #f5f5f5;
    border-radius: 5px;

    &::placeholder {
      font-size: 18px;
      line-height: 1.38;
      color: ${colors.grayText};

      ${mq.mobileOnly} {
        font-size: 16px;
        line-height: 1.43;
      }
    }
  `;
};
