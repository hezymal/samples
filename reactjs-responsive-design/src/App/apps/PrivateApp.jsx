import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'App/components/Logo';
import ChatPage from 'App/pages/ChatPage';
import NotFoundPage from 'App/pages/NotFoundPage';
import ProfilePage from 'App/pages/ProfilePage';
import LogOutPage from 'App/pages/LogOutPage';
import Layout from 'ui/Layout';
import Link from 'ui/Link';
import Menu from 'ui/Menu';

const Container = styled.div`
    background-color: #ffffff;
    height: 100%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PrivateApp = () => {
    return (
        <Container>
            <Layout>
                <Layout.Top>
                    <Header>
                        <Logo />
                        <Menu horizontal>
                            <Menu.Item>
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/tasks">
                                    Tasks
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/chat">
                                    Chat
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/profile">
                                    Profile
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/logout">
                                    Log Out
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout.Top>
                <Layout.Left>
                    <Menu>
                        <Menu.Item>
                            <Link to="/chat/task1">
                                Task 1
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/chat/task2">
                                Task 2
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/chat/task3">
                                Task 3
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/chat/task4">
                                Task 4
                            </Link>
                        </Menu.Item>
                        <Menu.Item submenu={
                            <Route path="/chat/task5">
                                <Menu.SubMenu>
                                    <Menu.Item submenu={
                                        <Route path="/chat/task5/subtask1">
                                            <Menu.SubMenu>
                                                <Menu.Item>
                                                    <Link to="/chat/task5/subtask1/subtask1">
                                                        SubTask 1
                                                    </Link>
                                                </Menu.Item>
                                            </Menu.SubMenu>
                                        </Route>
                                    }>
                                        <Link to="/chat/task5/subtask1">
                                            SubTask 1
                                        </Link>
                                    </Menu.Item>
                                </Menu.SubMenu>
                            </Route>
                        }>
                            <Link to="/chat/task5">
                                Task 5
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Layout.Left>
                <Layout.Middle>
                    <Switch>
                        <Route path="/chat">
                            <ChatPage />
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
                <Layout.Right>
                </Layout.Right>
            </Layout>
        </Container>
    );
};

export default PrivateApp;
