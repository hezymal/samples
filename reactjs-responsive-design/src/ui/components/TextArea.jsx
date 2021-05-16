import React from "react";
import styled from "styled-components";
import { grey1, grey2 } from "ui/styles/colors";
import { paddingSize, borderRadius, lineHeight } from "ui/styles/sizes";

const Control = styled.textarea`
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: ${lineHeight}px;
    height: ${lineHeight}px;
    margin: 0;
    padding: ${paddingSize}px;
    border: none;
    border-radius: ${borderRadius}px;
    background-color: ${grey1};
    outline: none;
    font: inherit;
    overflow: hidden;
    resize: none;

    &:active,
    &:focus {
        background-color: ${grey2};
    }
`;

const TextArea = ({
    autoSize = true,
    value,
    onEnter,
    onKeyUp,
    onKeyDown,
    onInput,
    ...tail
}) => {
    const recalcHeight = (element) => {
        element.style.height = "0px";
        element.style.height = element.scrollHeight + "px";
    };

    const handleInput = (event) => {
        if (autoSize) {
            recalcHeight(event.currentTarget);
        }

        onInput && onInput(event);
    };

    const handleKeyUp = (event) => {
        if (autoSize) {
            recalcHeight(event.currentTarget);
        }

        onKeyUp && onKeyUp(event);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 || event.keyCode === 10) {
            if (autoSize) {
                recalcHeight(event.currentTarget);
            }

            onEnter && onEnter(event);
        }

        onKeyDown && onKeyDown(event);
    };

    return (
        <Control
            value={value}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            {...tail}
        />
    );
};

export default TextArea;
