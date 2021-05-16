import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "App/components/PageTitle";
import Form from "App/components/Form";
import { userController } from "App/controllers";
import Button from "ui/components/Button";
import Grid from "ui/components/Grid";
import Input from "ui/components/Input";
import { useHistory, useLocation } from "react-router";

const Container = styled.div``;

const isValidForm = (values) => {
    if (!values.userName) {
        return false;
    }

    if (!values.password) {
        return false;
    }

    return true;
};

const LogInPage = () => {
    const history = useHistory();
    const location = useLocation();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUserNameChange = (event) =>
        setUserName(event.currentTarget.value);

    const handlePasswordChange = (event) =>
        setPassword(event.currentTarget.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!userController.logIn({ userName, password })) {
            return;
        }

        if (location.pathname === "/login") {
            history.push("/");
        }
    };

    const handleForgotPassword = () => {
        history.push("/forgot-password");
    };

    return (
        <Container>
            <Form>
                <PageTitle>Welcome!</PageTitle>
                <Form.Field>
                    <Input
                        placeholder="Username"
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Field>
                <Grid.Row gutter={16} size={2}>
                    <Grid.Col>
                        <Button
                            type="submit"
                            color="purple"
                            disabled={!isValidForm({ userName, password })}
                            onClick={handleSubmit}
                        >
                            Log In
                        </Button>
                    </Grid.Col>
                    <Grid.Col>
                        <Button type="button" onClick={handleForgotPassword}>
                            Forgot Password?
                        </Button>
                    </Grid.Col>
                </Grid.Row>
            </Form>
        </Container>
    );
};

export default LogInPage;
