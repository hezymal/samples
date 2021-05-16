import React from "react";
import styled, { css } from "styled-components";
import useBodyEventListener from "ui/hooks/useBodyEventListener";
import Menu, { MenuItem } from "ui/components/Menu";
import { contextMenuZIndex } from "ui/styles/zIndexes";

const ContextMenuPoint = styled.div`
    position: fixed;
    z-index: ${contextMenuZIndex};

    ${(props) =>
        props.position &&
        css`
            left: ${props.position.x}px;
            top: ${props.position.y}px;
        `}
`;

const ContextMenuItems = styled(Menu)`
    position: absolute;
    left: 0;
    margin: 0;

    ${(props) =>
        props.direction === "right" &&
        css`
            left: auto;
            right: 0;
        `}
`;

export const ContextMenuItem = styled(MenuItem)`
    min-width: 120px;
`;

const ContextMenu = ({
    show,
    position,
    children,
    direction = "left",
    onHide,
    ...tail
}) => {
    useBodyEventListener(
        "click",
        (event) => {
            if (show) {
                onHide && onHide(event);
            }
        },
        [show, onHide]
    );

    useBodyEventListener(
        "contextmenu",
        (event) => {
            if (show) {
                onHide && onHide(event);
            }
        },
        [show, onHide]
    );

    if (!show) {
        return null;
    }

    return (
        <ContextMenuPoint position={position}>
            <ContextMenuItems direction={direction} {...tail}>
                {children}
            </ContextMenuItems>
        </ContextMenuPoint>
    );
};

export default ContextMenu;
