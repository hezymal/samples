import React from "react";
import styled from "styled-components";
import { grey3 } from "ui/styles/colors";
import { borderRadius, paddingSize } from "ui/styles/sizes";
import Task from "./components/Task";

const Container = styled.div`
    border: 1px solid ${grey3};
    border-radius: ${borderRadius}px;
    margin-bottom: ${paddingSize}px;
`;

const Title = styled.div`
    padding: ${paddingSize}px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Sprint = ({ title, tasks }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <List>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </List>
        </Container>
    );
};

export default Sprint;
