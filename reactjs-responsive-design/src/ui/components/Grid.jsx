import React, { Children } from "react";
import styled, { css } from "styled-components";

const RowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${(props) => props.direction === "right" && css`
        flex-direction: row-reverse;
    `}

    ${(props) => css`
        width: calc(100% + ${props.gutter}px);
        margin-left: -${props.gutter === 0 ? 0 : (props.gutter / 2)}px;
    `}
`;

const ColContainer = styled.div`
    ${(props) => css`
        width: calc(${(100 / props.rowSize) * props.size}% - ${props.gutter}px);
        margin-left: ${props.gutter / 2}px;
        margin-right: ${props.gutter / 2}px;
    `}
`;

const Grid = {};

Grid.Row = ({
    children,
    gutter = 16,
    size = 1,
    direction = "left",
    ...tail
}) => {
    children = Children.map(children, (child) => ({
        ...child,
        props: { ...child.props, gutter, rowSize: size },
    }));

    return <RowContainer children={children} direction={direction} gutter={gutter} {...tail} />;
};

Grid.Col = ({ size = 1, ...tail }) => {
    return (
        <ColContainer size={size} {...tail} />
    );
};

export default Grid;
