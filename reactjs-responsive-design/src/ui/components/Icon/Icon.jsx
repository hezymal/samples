import React, { createElement } from "react";
import styled from "styled-components";
import { ReactComponent as minus } from "./templates/minus.svg";
import { ReactComponent as plus } from "./templates/plus.svg";

const templates = { minus, plus };

const Block = styled.i`
    display: inline-block;
    text-align: center;
    height: 16px;
    width: 16px;
    padding: 4px;

    & > svg {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

const Icon = ({ type, ...tail }) => {
    const template = templates[type];
    if (!template) {
        throw new Error(`Unknown icon type: ${type}`);
    }

    return <Block {...tail}>{createElement(template)}</Block>;
};

export default Icon;
