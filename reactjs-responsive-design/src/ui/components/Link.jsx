import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { purple5 } from "ui/styles/colors";

const Link = styled(NavLink)`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &.active {
        color: ${purple5};
        text-decoration: underline;
    }
`;

export default Link;
