import React from "react";
import styled from "styled-components";
import { purple1 } from "ui/styles/colors";
import { lineHeight } from "ui/styles/sizes";

const Container = styled.a`
    text-transform: uppercase;
    font-weight: bold;
    line-height: ${lineHeight}px;
    background-color: ${purple1};
    display: inline-block;
    padding: 0 10px;
    height: ${lineHeight}px;
    border-radius: 21px;
    text-align: center;
    text-decoration: none;
`;

const Logo = () => {
    return <Container href="/">Chat</Container>;
};

export default Logo;
