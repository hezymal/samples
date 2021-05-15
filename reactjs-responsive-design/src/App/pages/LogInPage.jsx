import React, { useState } from "react";
import styled from "styled-components";
import { userController } from "App/controllers";
import Button from "ui/Button";
import Grid from "ui/Grid";
import Input from "ui/Input";
import { paddingSize } from "ui/styles/sizes";
import { useHistory, useLocation } from "react-router";

const Container = styled.div``;

const FormTitle = styled.div`
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5em;
`;

const Form = styled.form`
    width: 50%;
    margin: 20px auto;
`;

const Fields = styled.div``;

const Field = styled.div`
    margin-bottom: ${paddingSize}px;
`;

const LogInPage = () => {
    const history = useHistory();
    const location = useLocation();

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleUserNameChange = (event) =>
        setUserName(event.currentTarget.value);

    const handlePasswordChange = (event) =>
        setPassword(event.currentTarget.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        userController.logIn({ userName, password });

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
                <FormTitle>Log In</FormTitle>
                <Fields>
                    <Field>
                        <Input
                            placeholder="Username"
                            value={userName}
                            onChange={handleUserNameChange}
                        />
                    </Field>
                    <Field>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Field>
                </Fields>
                <Grid.Row gutter={16} size={2}>
                    <Grid.Col>
                        <Button type="submit" onClick={handleSubmit}>
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
