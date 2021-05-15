import { formatISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'ui/Button';
import Grid from 'ui/Grid';
import TextArea from 'ui/TextArea';
import { paddingSize } from 'ui/styles/sizes';
import Message from './Message';

const Container = styled.div``;

const Content = styled.div``;

const NewMessage = styled.form``;

const OverridedTextArea = styled(TextArea)`
    margin-bottom: ${paddingSize}px;
`;

const OverridedMessage = styled(Message)`
    margin-bottom: ${paddingSize}px;
`;

const generateNewMessage = () => {
    return {
        id: Date.now(),
        createdAt: null,
        direction: 'outcoming',
        text: '',
    };
};

const isValidMessage = (message) => {
    if (!message.text) {
        return false;
    }

    return true;
};

const Chat = () => {
    const [newMessage, setNewMessage] = useState(generateNewMessage());
    const [messages, setMessages] = useState([]);

    const saveNewMessage = () => {
        setMessages(messages => [...messages, {
            ...newMessage,
            createdAt: formatISO(new Date()),
        }]);
        setNewMessage(generateNewMessage());
    };

    const handleNewMessageTextChange = (event) => {
        setNewMessage({ ...newMessage, text: event.currentTarget.value });
    };

    const handleNewMessageSave = (event) => {
        event.preventDefault();
        saveNewMessage();
    };

    const handleNewMessageTextEnter = (event) => {
        saveNewMessage();
    };

    useEffect(() => {
        setMessages([
            {
                id: 1,
                createdAt: '2021-05-15T15:32:23.001',
                direction: 'incoming',
                text: 'What is a Subject?',
            },
            {
                id: 2,
                createdAt: '2021-05-15T15:33:23.001',
                direction: 'outcoming',
                text: 'An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.',
            },
        ]);
    }, [setMessages]);

    return (
        <Container>
            <Content>
                {messages.map((message) => (
                    <OverridedMessage
                        key={message.id}
                        direction={message.direction}
                        createdAt={message.createdAt}
                    >
                        {message.text}
                    </OverridedMessage>
                ))}
            </Content>
            <NewMessage>
                <OverridedTextArea
                    value={newMessage.text}
                    onChange={handleNewMessageTextChange}
                    onEnter={isValidMessage(newMessage) && handleNewMessageTextEnter}
                />
                <Grid.Row size={4} direction="right">
                    <Grid.Col>
                        <Button 
                            type='submit'
                            onClick={handleNewMessageSave}
                            disabled={!isValidMessage(newMessage)}
                        >
                            Send
                        </Button>
                    </Grid.Col>
                </Grid.Row>
            </NewMessage>
        </Container>
    );
};

export default Chat;
