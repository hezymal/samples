import React, { useState } from "react";
import styled from "styled-components";
import { STATUSES, STATUS_TODO, STATUS_IN_PROGRESS } from "App/logic/task";
import { grey3 } from "ui/styles/colors";
import { borderRadius } from "ui/styles/sizes";
import Columns from "./components/Columns";
import Task from "./components/Task";

const Container = styled.div`
    border: 1px solid ${grey3};
    border-radius: ${borderRadius}px;
`;

const Title = styled.div`
    line-height: 2em;
    text-align: center;
    border-bottom: 1px solid ${grey3};
`;

const TasksBoard = () => {
    const [draggingTaskId, setDraggingTaskId] = useState(null);

    const [tasks, setTasks] = useState([
        { id: 1, title: "Add dashboard page", status: STATUS_TODO },
        { id: 2, title: "Add tasks page", status: STATUS_IN_PROGRESS },
    ]);

    const handleColumnDragOver = (event) => {
        event.preventDefault();
    };

    const getTaskDragStartHandler = (taskId) => () => {
        setDraggingTaskId(taskId);
    };

    const getColumnDropHandler = (columnStatus) => (event) => {
        event.preventDefault();

        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === draggingTaskId
                    ? { ...task, status: columnStatus }
                    : task
            )
        );
    };

    return (
        <Container>
            <Title>Current Sprint</Title>
            <Columns>
                {STATUSES.map((status) => {
                    const statusTasks = tasks.filter(
                        (task) => task.status === status.key
                    );

                    return (
                        <Columns.Column
                            key={status.key}
                            onDrop={getColumnDropHandler(status.key)}
                            onDragOver={handleColumnDragOver}
                        >
                            <Columns.Title tasksCount={statusTasks.length}>
                                {status.title}
                            </Columns.Title>
                            {statusTasks.map((task) => (
                                <Task
                                    draggable
                                    key={task.id}
                                    onDragStart={getTaskDragStartHandler(
                                        task.id
                                    )}
                                >
                                    {task.title}
                                </Task>
                            ))}
                        </Columns.Column>
                    );
                })}
            </Columns>
        </Container>
    );
};

export default TasksBoard;
