import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Form from "App/components/Form";
import PageTitle from "App/components/PageTitle";
import Button from "ui/components/Button";
import Grid from "ui/components/Grid";
import Input from "ui/components/Input";

const Container = styled.div``;

const isValidForm = (values) => {
    if (!values.userName) {
        return false;
    }

    return true;
};

const ForgotPasswordPage = () => {
    const history = useHistory();
    const [userName, setUserName] = useState();

    const handleUserNameChange = (event) =>
        setUserName(event.currentTarget.value);

    const handleSendClick = (event) => {
        event.preventDefault();
        history.push("/login");
    };

    const handleReturnClick = () => {
        history.push("/login");
    };

    return (
        <Container>
            <Form>
                <PageTitle>Forgot Password?</PageTitle>
                <Form.Field>
                    <Input
                        placeholder="Username"
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                </Form.Field>
                <Grid.Row gutter={16} size={2}>
                    <Grid.Col>
                        <Button
                            type="submit"
                            color="purple"
                            disabled={!isValidForm({ userName })}
                            onClick={handleSendClick}
                        >
                            Send
                        </Button>
                    </Grid.Col>
                    <Grid.Col>
                        <Button type="button" onClick={handleReturnClick}>
                            Return
                        </Button>
                    </Grid.Col>
                </Grid.Row>
            </Form>
        </Container>
    );
};

export default ForgotPasswordPage;
