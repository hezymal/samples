import React from "react";
import styled from "styled-components";
import { grey1, grey2 } from "./styles/colors";
import { paddingSize, borderRadius, lineHeight } from "./styles/sizes";

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
    overflow-y: visible;
    resize: none;

    &:active,
    &:focus {
        background-color: ${grey2};
    }
`;

const TextArea = ({
    autoSize = true,
    onEnter,
    onInput,
    onKeyUp,
    onKeyDown,
    ...tail
}) => {
    const recalcHeight = (element) => {
        element.style.height = 0;
        element.style.height = element.scrollHeight + "px";
    };

    const handleInput = (event) => {
        if (autoSize) {
            recalcHeight(event.currentTarget);
        }

        onInput && onInput(event);
    };

    const handleKeyUp = (event) => {
        onKeyUp && onKeyUp(event);

        if (autoSize) {
            recalcHeight(event.currentTarget);
        }
    };

    const handleKeyDown = (event) => {
        if (onEnter) {
            if (
                (event.ctrlKey || event.metaKey) &&
                (event.keyCode === 13 || event.keyCode === 10)
            ) {
                onEnter(event);
            }
        }
    };

    return (
        <Control
            onInput={handleInput}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            {...tail}
        />
    );
};

export default TextArea;
