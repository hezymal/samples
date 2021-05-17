import React from "react";
import styled from "styled-components";
import { grey4 } from "ui/styles/colors";

const Container = styled.div`
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: ${grey4};
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
`;

const UserLogo = ({ userName }) => {
    return (
        <Container>
            {userName ? userName.substr(0, 1).toUpperCase() : "?"}
        </Container>
    );
};

export default UserLogo;
