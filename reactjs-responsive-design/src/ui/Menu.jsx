import React, { Children } from 'react';
import styled, { css } from 'styled-components';
import { lineHeight } from './styles/sizes';

const MenuContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    ${props => props.horizontal && css`
        display: flex;
    `}
`;

const ItemContainer = styled.li``;

const ItemLink = styled.div`
    margin: 2px 0;
    line-height: ${lineHeight}px;

    ${props => props.horizontal && css`
        margin: 0 10px;
    `}
`;

const ItemSubMenu = styled.div`
    margin-left: 12px;
`;

const SubMenuContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Menu = ({ children, horizontal, ...tail }) => {
    children = Children.map(children, child => ({
        ...child,
        props: { ...child.props, horizontal },
    }));

    return (
        <MenuContainer children={children} horizontal={horizontal} {...tail} />
    );
};

Menu.Item = ({ submenu, ...tail }) => {
    return (
        <ItemContainer>
            <ItemLink {...tail} />
            <ItemSubMenu children={submenu} />
        </ItemContainer>
    );
};

Menu.SubMenu = ({ ...tail }) => {
    return (
        <SubMenuContainer {...tail} />
    );
};

export default Menu;
