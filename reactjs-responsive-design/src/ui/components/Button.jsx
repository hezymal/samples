import React from "react";
import styled, { css } from "styled-components";
import { grey1, grey2, purple2, purple4 } from "ui/styles/colors";
import { borderRadius, lineHeight } from "ui/styles/sizes";

const Block = styled.button`
    width: 100%;
    font: inherit;
    border: none;
    border-radius: ${borderRadius}px;
    line-height: ${lineHeight}px;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }

    ${(props) =>
        props.color === "grey" &&
        css`
            background-color: ${grey1};

            &:hover {
                background-color: ${grey1};
            }

            &:active {
                background-color: ${grey2};
            }

            &:disabled {
                background-color: ${grey1};
            }
        `}

    ${(props) =>
        props.color === "purple" &&
        css`
            background-color: ${purple2};

            &:hover {
                background-color: ${purple2};
            }

            &:active {
                background-color: ${purple4};
            }

            &:disabled {
                background-color: ${purple2};
            }
        `}
`;

const Button = ({ color = "grey", ...tail }) => {
    return <Block color={color} {...tail} />;
};

export default Button;
