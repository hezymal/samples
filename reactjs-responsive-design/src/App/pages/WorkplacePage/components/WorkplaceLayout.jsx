import React from "react";
import FlexibleLayout from "ui/components/FlexibleLayout";

const WorkplaceLayout = ({ children, left, right }) => {
    return <FlexibleLayout left={left} children={children} right={right} />;
};

export default WorkplaceLayout;
