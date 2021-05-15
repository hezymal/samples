import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { color1 } from "ui/styles/colors";

const Link = styled(NavLink)`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &.active {
        color: ${color1};
        text-decoration: underline;
    }
`;

export default Link;
