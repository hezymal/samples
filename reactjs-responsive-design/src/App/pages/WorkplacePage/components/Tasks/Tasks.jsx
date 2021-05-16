import React from "react";
import styled from "styled-components";
import ContextMenu, { ContextMenuItem, useContextMenu } from "ui/components/ContextMenu";
import Link from "ui/components/Link";
import Tree, { TreeLeaf } from "ui/components/Tree";

const Container = styled.div``;

const TaskTitle = styled(Link)`
    white-space: nowrap;
`;

const TasksTreeLeaf = ({ task }) => {
    const contextMenu = useContextMenu();

    const existsChildren = Object.keys(task.children).length > 0;
    const title = <TaskTitle to={task.to}>{task.title}</TaskTitle>;

    return (
        <div>
            <TreeLeaf title={title} onContextMenu={contextMenu.onShow}>
                {existsChildren && <TasksTree tasks={task.children} />}
            </TreeLeaf>
            <ContextMenu
                show={contextMenu.show}
                position={contextMenu.position}
                onHide={contextMenu.onHide}
            >
                <ContextMenuItem>Rename task</ContextMenuItem>
                <ContextMenuItem>Remove task</ContextMenuItem>
            </ContextMenu>
        </div>
    );
};

const TasksTree = ({ tasks }) => {
    return (
        <Tree>
            {Object.keys(tasks).map((key) => (
                <TasksTreeLeaf key={key} task={tasks[key]} />
            ))}
        </Tree>
    );
};

const Tasks = ({ tasks }) => {
    return (
        <Container>
            <TasksTree tasks={tasks} />
        </Container>
    );
};

export default Tasks;
