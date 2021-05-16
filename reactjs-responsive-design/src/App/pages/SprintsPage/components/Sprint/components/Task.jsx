import React from "react";
import styled from "styled-components";
import { grey3 } from "ui/styles/colors";
import { paddingSize } from "ui/styles/sizes";

const Container = styled.li`
    border-top: 1px solid ${grey3};
    padding: ${paddingSize}px;
`;

const Task = ({ task }) => {
    return (
        <Container>
            {task.id}. {task.title}
        </Container>
    );
};

export default Task;
