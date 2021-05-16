import React, { Children } from "react";
import styled, { css } from "styled-components";
import { grey4 } from "ui/styles/colors";
import { paddingSize } from "ui/styles/sizes";

const Container = styled.div`
    display: grid;
    grid-template-columns: 15% 60% 25%;
    grid-template-rows: 47px auto;
    height: 100%;
`;

const Layout = ({
    children,
    noTop = false,
    noLeft = false,
    noRight = false,
    ...tail
}) => {
    children = Children.map(children, child => {
        return {
            ...child,
            props: { ...child.props, noTop, noLeft, noRight },
        };
    });

    return (
        <Container
            noTop={noTop}
            noLeft={noLeft}
            noRight={noRight}
            children={children}
            {...tail}
        />
    );
};

Layout.Top = styled.div`
    grid-column: 1 / 4;
    grid-row: 1;
    padding: ${paddingSize}px;
    border-bottom: 1px solid ${grey4};
`;

Layout.Left = styled.div`
    grid-column: 1;
    grid-row: 2;
    padding: ${paddingSize}px;
    overflow: auto;

    ${(props) => props.noTop && css`
        grid-row: 1 / 3;
    `}
`;

Layout.Middle = styled.div`
    grid-column: 2;
    grid-row: 2;
    padding: ${paddingSize}px;
    border-left: 1px solid ${grey4};
    border-right: 1px solid ${grey4};
    overflow: auto;

    ${(props) => props.noLeft && props.noRight && css`
        grid-column: 1 / 4;
        border-left: none;
        border-right: none;
    `}

    ${(props) => props.noLeft && !props.noRight && css`
        grid-column: 1 / 3;
        border-left: none;
    `}

    ${(props) => props.noTop && css`
        grid-row: 1 / 3;
    `}

    ${(props) => props.noPadding && css`
        padding: 0;
    `}
`;

Layout.Right = styled.div`
    grid-column: 3;
    grid-row: 2;
    padding: ${paddingSize}px;
    overflow: auto;

    ${(props) => props.noTop && css`
        grid-row: 1 / 3;
    `}
`;

export default Layout;
