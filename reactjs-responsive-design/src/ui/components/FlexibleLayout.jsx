import React, { useState } from "react";
import styled, { css } from "styled-components";
import useBodyEventListener from "ui/hooks/useBodyEventListener";
import { grey4, purple1 } from "ui/styles/colors";
import { paddingSize } from "ui/styles/sizes";

const FlexibleLayoutBlock = styled.div`
    display: grid;
    grid-template-rows: auto;
    height: 100%;

    ${(props) => css`
        grid-template-columns: ${props.leftDividerWidth}px auto ${props.rightDividerWidth}px;
    `}
`;

const FlexibleLayoutLeft = styled.div`
    grid-column: 1;
    grid-row: 1;
    padding: ${paddingSize}px;
    overflow: auto;
`;

const FlexibleLayoutMiddle = styled.div`
    position: relative;
    grid-column: 2;
    grid-row: 1;
    padding: ${paddingSize}px;
    border-left: 1px solid ${grey4};
    border-right: 1px solid ${grey4};
`;

const FlexibleLayoutRight = styled.div`
    grid-column: 3;
    grid-row: 1;
    padding: ${paddingSize}px;
    overflow: auto;
`;

const FlexibleLayoutLeftDivider = styled.div`
    position: absolute;
    top: 0;
    left: -3px;
    width: 6px;
    height: 100%;
    cursor: col-resize;
    background-color: ${purple1};
    opacity: 0;
    transition: 0.5s opacity;

    &:hover {
        opacity: 1;
    }
`;

const FlexibleLayoutRightDivider = styled.div`
    position: absolute;
    top: 0;
    right: -3px;
    width: 6px;
    height: 100%;
    cursor: col-resize;
    background-color: ${purple1};
    opacity: 0;
    transition: 0.5s opacity;

    &:hover {
        opacity: 1;
    }
`;

const FlexibleLayout = ({ children, left, right, ...tail }) => {
    const [rightDividerX, setRightDividerX] = useState(null);
    const [rightDividerWidth, setRightDividerWidth] = useState(200);
    const [actualRightDividerWidth, setActualRightDividerWidth] = useState(200);

    const [leftDividerX, setLeftDividerX] = useState(null);
    const [leftDividerWidth, setLeftDividerWidth] = useState(200);
    const [actualLeftDividerWidth, setActualLeftDividerWidth] = useState(200);

    const handleRightDividerMouseDown = (event) => {
        console.log(event.pageX);
        setRightDividerX(event.pageX);
    };

    const handleLeftDividerMouseDown = (event) => {
        console.log(event.pageX);
        setLeftDividerX(event.pageX);
    };

    useBodyEventListener(
        "mousemove",
        (event) => {
            if (rightDividerX !== null) {
                console.log(event.pageX);
                setActualRightDividerWidth(
                    rightDividerWidth - (event.pageX - rightDividerX)
                );
            }
        },
        [rightDividerX, rightDividerWidth, setActualRightDividerWidth]
    );

    useBodyEventListener(
        "mousemove",
        (event) => {
            if (leftDividerX !== null) {
                console.log(event.pageX);
                setActualLeftDividerWidth(
                    leftDividerWidth + (event.pageX - leftDividerX)
                );
            }
        },
        [leftDividerX, leftDividerWidth, setActualLeftDividerWidth]
    );

    useBodyEventListener(
        "mouseup",
        (event) => {
            if (rightDividerX !== null) {
                console.log(event.pageX);
                setRightDividerWidth(actualRightDividerWidth);
                setRightDividerX(null);
            }
        },
        [rightDividerX, actualRightDividerWidth, setRightDividerX, setRightDividerWidth]
    );

    useBodyEventListener(
        "mouseup",
        (event) => {
            if (leftDividerX !== null) {
                console.log(event.pageX);
                setLeftDividerWidth(actualLeftDividerWidth);
                setLeftDividerX(null);
            }
        },
        [leftDividerX, actualLeftDividerWidth, setLeftDividerX, setLeftDividerWidth]
    );

    console.log(rightDividerWidth);
    console.log(leftDividerWidth);

    return (
        <FlexibleLayoutBlock
            leftDividerWidth={actualLeftDividerWidth}
            rightDividerWidth={actualRightDividerWidth}
        >
            <FlexibleLayoutLeft>{left}</FlexibleLayoutLeft>
            <FlexibleLayoutMiddle>
                <FlexibleLayoutLeftDivider
                    onMouseDown={handleLeftDividerMouseDown}
                />
                {children}
                <FlexibleLayoutRightDivider
                    onMouseDown={handleRightDividerMouseDown}
                />
            </FlexibleLayoutMiddle>
            <FlexibleLayoutRight>{right}</FlexibleLayoutRight>
        </FlexibleLayoutBlock>
    );
};

export default FlexibleLayout;
