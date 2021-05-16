import React from "react";
import styled, { css } from "styled-components";
import Menu, { MenuItem } from "ui/components/Menu";
import { dropdownZIndex } from "ui/styles/zIndexes";
import useDropdownToggle from "./hooks/useDropdownToggle";

const DropdownBlock = styled.div`
    position: relative;
    z-index: ${dropdownZIndex};
`;

const DropdownToggle = styled.div`
    cursor: pointer;
`;

const DropdownItems = styled(Menu)`
    position: absolute;
    left: 0;

    ${(props) =>
        props.direction === "right" &&
        css`
            left: auto;
            right: 0;
        `}
`;

export const DropdownItem = styled(MenuItem)`
    min-width: 120px;
`;

const Dropdown = ({ toggle, children, direction = "left", ...tail }) => {
    const [showItems, setShowItems] = useDropdownToggle();

    const handleToggleClick = () => {
        setShowItems(true);
    };

    return (
        <DropdownBlock {...tail}>
            <DropdownToggle onClick={handleToggleClick} data-dropdown-toggle>
                {toggle}
            </DropdownToggle>
            {showItems && (
                <DropdownItems direction={direction}>{children}</DropdownItems>
            )}
        </DropdownBlock>
    );
};

export default Dropdown;
