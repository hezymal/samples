import React from 'react';
import styled from 'styled-components';
import Form from "App/components/Form";
import Grid from 'ui/components/Grid';
import Button from 'ui/components/Button';
import Input from 'ui/components/Input';
import { userController } from 'App/controllers';

const Container = styled.div``;

const ProfilePage = () => {
    const user = userController.user;

    return (
        <Container>
            <Form>
                <Form.Field>
                    <Input placeholder="Username" value={user.userName} />
                </Form.Field>
                <Grid.Row gutter={16} size={2}>
                    <Grid.Col>
                        <Button type="submit" color="purple">
                            Save
                        </Button>
                    </Grid.Col>
                    <Grid.Col>
                        <Button type="button">
                            Set password
                        </Button>
                    </Grid.Col>
                </Grid.Row>
            </Form>
        </Container>
    );
};

export default ProfilePage;
