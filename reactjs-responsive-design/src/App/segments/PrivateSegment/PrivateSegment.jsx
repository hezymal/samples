import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import DashboardPage from "App/pages/DashboardPage";
import LogOutPage from "App/pages/LogOutPage";
import NotFoundPage from "App/pages/NotFoundPage";
import ProfilePage from "App/pages/ProfilePage";
import SprintsPage from "App/pages/SprintsPage";
import WorkplacePage from "App/pages/WorkplacePage";
import Layout from "ui/components/Layout";
import Header from "./components/Header";
import { userController } from "App/controllers";

const Container = styled.div`
    background-color: #ffffff;
    height: 100%;
`;

const PrivateSegment = () => {
    const user = userController.user;

    return (
        <Container>
            <Layout noLeft noRight>
                <Layout.Top>
                    <Header userName={user.userName} />
                </Layout.Top>
                <Layout.Middle noPadding>
                    <Switch>
                        <Route exact path="/">
                            <DashboardPage />
                        </Route>
                        <Route path="/workplace">
                            <WorkplacePage />
                        </Route>
                        <Route path="/sprints">
                            <SprintsPage />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage />
                        </Route>
                        <Route path="/logout">
                            <LogOutPage />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </Layout.Middle>
            </Layout>
        </Container>
    );
};

export default PrivateSegment;
