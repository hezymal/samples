import React from "react";
import FlexibleLayout from "ui/components/FlexibleLayout";

const DashboardLayout = ({ children, right }) => {
    return <FlexibleLayout children={children} right={right} />;
};

export default DashboardLayout;
