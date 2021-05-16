import React from "react";
import DashboardLayout from "./components/DashboardLayout";
import TasksBoard from "./components/TasksBoard";

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <TasksBoard />
        </DashboardLayout>
    );
};

export default DashboardPage;
