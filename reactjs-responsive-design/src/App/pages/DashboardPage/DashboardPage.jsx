import React, { Fragment } from "react";
import DashboardLayout from "./components/DashboardLayout";
import TasksBoard from "./components/TasksBoard";

const DashboardPage = () => {
    return (
        <DashboardLayout
            children={<TasksBoard />}
            right={<Fragment />}
        />
    );
};

export default DashboardPage;
