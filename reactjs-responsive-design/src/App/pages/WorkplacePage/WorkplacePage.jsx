import React, { Fragment } from "react";
import Chat from "./components/Chat";
import Tasks from "./components/Tasks";
import WorkplaceLayout from "./components/WorkplaceLayout";

const WorkplacePage = () => {
    const tasks = {
        task1: {
            to: "/workplace/task1",
            title: "Task 1",
            children: {},
        },
        task2: {
            to: "/workplace/task2",
            title: "Task 2",
            children: {},
        },
        task3: {
            to: "/workplace/task3",
            title: "Task 3",
            children: {},
        },
        task4: {
            to: "/workplace/task4",
            title: "Task 4",
            children: {},
        },
        task5: {
            to: "/workplace/task5",
            title: "Task 5",
            children: {
                subtask1: {
                    to: "/workplace/task5/subtask1",
                    title: "SubTask 1",
                    children: {
                        subtask1: {
                            to: "/workplace/task5/subtask1/subtask1",
                            title: "SubTask 1",
                            children: {},
                        },
                    },
                },
            },
        },
    };

    return (
        <WorkplaceLayout
            left={<Tasks tasks={tasks} />}
            children={<Chat />}
            right={<Fragment />}
        />
    );
};

export default WorkplacePage;
