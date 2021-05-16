import { format } from 'date-fns';
import React from 'react';
import styled, { css } from 'styled-components';
import { grey2, purple4 } from 'ui/styles/colors';
import { borderRadius, paddingSize } from 'ui/styles/sizes';

const Container = styled.div`
    ${props => props.direction === 'incoming' && css`
        padding-right: 10%;
    `}

    ${props => props.direction === 'outcoming' && css`
        padding-left: 10%;
        text-align: right;
    `}
`;

const Content = styled.div`
    display: inline-block;
    border-radius: ${borderRadius}px;
    padding: ${paddingSize}px;

    ${props => props.direction === 'incoming' && css`
        background-color: ${purple4};
    `}

    ${props => props.direction === 'outcoming' && css`
        background-color: ${grey2};
    `}
`;

const CreatedAt = styled.div`
    font-size: 0.85em;
    margin-bottom: 5px;
    opacity: 0.6;
`;

const Text = styled.div`
    white-space: pre-wrap;
`;

const Message = ({ createdAt, children, direction, ...tail }) => {
    return (
        <Container direction={direction} {...tail}>
            <Content direction={direction}>
                <CreatedAt>
                    {format(Date.parse(createdAt), 'dd.MM.yyyy HH:mm:ss')}
                </CreatedAt>
                <Text>
                    {children}
                </Text>
            </Content>
        </Container>
    );
};

export default Message;
