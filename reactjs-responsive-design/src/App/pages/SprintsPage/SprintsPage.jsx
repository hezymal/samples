import React from "react";
import SprintsLayout from "./components/SprintsLayout";
import Sprint from "./components/Sprint";

const SprintsPage = () => {
    return (
        <SprintsLayout>
            <Sprint
                title="Current sprint"
                tasks={[{ id: 1, title: "Add sprints page" }]}
            />
            <Sprint
                title="Next sprint"
                tasks={[
                    { id: 2, title: "Fix sprints page" },
                    { id: 3, title: "Fix dashboard page" },
                    { id: 4, title: "Fix workplace page" },
                    { id: 5, title: "Fix #2 dashboard page" },
                ]}
            />
        </SprintsLayout>
    );
};

export default SprintsPage;
