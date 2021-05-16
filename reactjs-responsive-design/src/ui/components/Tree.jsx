import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "ui/components/IconButton";
import { grey4 } from "ui/styles/colors";

const Tree = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const LeafBlock = styled.li`
    position: relative;
`;

const LeafContent = styled.span`
    line-height: 24px;
    margin-left: 24px;
`;

const LeafChilds = styled.div`
    margin-left: 12px;
`;

const LeafLink = styled.div`
    position: absolute;
    left: 6px;
    top: 11px;
    border-bottom: 1px dotted ${grey4};
    width: 12px;
    height: 0;

    &:after {
        content: "";
        position: absolute;
    }

    &:after {
        border-left: 1px dotted ${grey4};
        width: 0;
        height: 24px;
        bottom: 50%;
    }
`;

const ToggleButton = styled(IconButton)`
    position: absolute;
    top: 2px;
    left: -8px;
`;

export const TreeLeaf = ({ title, children, onClick, ...tail }) => {
    const [showChildren, setShowChildren] = useState(false);

    const handleToggleButtonClick = () => {
        setShowChildren((showChildren) => !showChildren);
    };

    const handleContentClick = (event) => {
        setShowChildren((showChildren) => !showChildren);
        onClick && onClick(event);
    };

    return (
        <LeafBlock>
            <LeafLink />
            {!!children && (
                <ToggleButton
                    iconType={showChildren ? "minus" : "plus"}
                    onClick={handleToggleButtonClick}
                />
            )}
            <LeafContent onClick={handleContentClick} {...tail}>
                {title}
            </LeafContent>
            {showChildren && <LeafChilds>{children}</LeafChilds>}
        </LeafBlock>
    );
};

export default Tree;
