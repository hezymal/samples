import React from 'react';
import styled from 'styled-components';
import PageTitle from "App/components/PageTitle";

const Container = styled.div`
    text-align: center;
    margin: 20px;
`;

const NotFoundPage = () => {
    return (
        <Container>
            <PageTitle>Page Not Found</PageTitle>
        </Container>
    );
};

export default NotFoundPage;
