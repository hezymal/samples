import styled from "styled-components";
import { lineHeight } from "ui/styles/sizes";

const NavBar = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

NavBar.Item = styled.li`
    margin: 0 10px;
    line-height: ${lineHeight}px;
`;

export default NavBar;
