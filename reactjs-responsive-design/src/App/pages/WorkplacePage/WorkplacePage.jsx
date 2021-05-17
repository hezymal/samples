import React, { Fragment } from "react";
import { loadQuery, usePreloadedQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import Chat from "./components/Chat";
import Tasks from "./components/Tasks";
import WorkplaceLayout from "./components/WorkplaceLayout";
import relayEnvironment from "App/relayEnvironment";

const workplacePageQuery = graphql`
    query WorkplacePageQuery {
        tasks {
            _id
            name
        }
    }
`;

const preloadedQuery = loadQuery(relayEnvironment, workplacePageQuery, {});

const WorkplacePage = () => {
    let { tasks } = usePreloadedQuery(workplacePageQuery, preloadedQuery);

    tasks = tasks.map(task => ({
        to: `/workplace/${task._id}`,
        title: task.name,
        children: {
            [task._id]: {
                to: `/workplace/${task._id}`,
                title: task.name,
                children: {},
            },
            [task._id + '2']: {
                to: `/workplace/${task._id}`,
                title: task.name,
                children: {},
            },
        },
    }));

    return (
        <WorkplaceLayout
            left={<Tasks tasks={tasks} />}
            children={<Chat />}
            right={<Fragment />}
        />
    );
};

export default WorkplacePage;
