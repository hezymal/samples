import React, { Children } from "react";
import styled, { css } from "styled-components";

const RowBlock = styled.div`
    display: flex;
    flex-direction: ${(props) =>
        props.direction === "left" ? "row" : "row-reverse"};
    justify-content: space-between;
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
        props: { ...child.props, gutter, size },
    }));

    return <RowBlock children={children} direction={direction} {...tail} />;
};

Grid.Col = styled.div`
    ${(props) => css`
        width: calc(${100 / props.size}% - ${props.gutter / props.size}px);
    `}
`;

export default Grid;
