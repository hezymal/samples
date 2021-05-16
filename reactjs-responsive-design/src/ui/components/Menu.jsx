import styled from "styled-components";
import { grey4 } from "ui/styles/colors";
import { borderRadius, lineHeight, paddingSize } from "ui/styles/sizes";

const Menu = styled.ul`
    margin: ${paddingSize}px 0;
    padding: 0;
    border: 1px solid ${grey4};
    border-radius: ${borderRadius}px;
    background-color: white;
    list-style: none;
    box-shadow: 2px 2px 10px #cccccc;
`;

export const MenuItem = styled.li`
    height: ${lineHeight}px;
    line-height: ${lineHeight}px;
    padding: 0 ${paddingSize}px;
`;

export default Menu;
