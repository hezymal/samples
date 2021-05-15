import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Button from 'ui/Button';
import Grid from 'ui/Grid';
import Input from 'ui/Input';
import { paddingSize } from 'ui/styles/sizes';

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

const ForgotPasswordPage = () => {
    const history = useHistory();
    const [userName, setUserName] = useState();
    
    const handleUserNameChange = (event) =>
        setUserName(event.currentTarget.value);

    const handleSendClick = (event) => {
        event.preventDefault();
        history.push('/login');
    };

    const handleReturnClick = () => {
        history.push('/login');
    };

    return (
        <Container>
            <Form>
                <FormTitle>Forgit Password?</FormTitle>
                <Fields>
                    <Field>
                        <Input
                            placeholder='Username'
                            value={userName}
                            onChange={handleUserNameChange}
                        />
                    </Field>
                </Fields>
                <Grid.Row gutter={16} size={2}>
                    <Grid.Col>
                        <Button type='submit' onClick={handleSendClick}>
                            Send
                        </Button>
                    </Grid.Col>
                    <Grid.Col>
                        <Button type='button' onClick={handleReturnClick}>
                            Return
                        </Button>
                    </Grid.Col>
                </Grid.Row>
            </Form>
        </Container>
    );
};

export default ForgotPasswordPage;
