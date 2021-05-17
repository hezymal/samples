import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'App/components/Logo';
import LogInPage from 'App/pages/LogInPage';
import ForgotPasswordPage from 'App/pages/ForgotPasswordPage';
import Layout from 'ui/components/Layout';

const Container = styled.div`
    background-color: #ffffff;
    height: 100%;
`;

const Header = styled.div`
    text-align: center;
`;

const PublicSegment = () => {
    return (
        <Container>
            <Layout noLeft noRight>
                <Layout.Top>
                    <Header>
                        <Logo />
                    </Header>
                </Layout.Top>
                <Layout.Middle>
                    <Switch>
                        <Route path='/forgot-password'>
                            <ForgotPasswordPage />
                        </Route>
                        <Route>
                            <LogInPage />
                        </Route>
                    </Switch>
                </Layout.Middle>
            </Layout>
        </Container>
    );
};

export default PublicSegment;
