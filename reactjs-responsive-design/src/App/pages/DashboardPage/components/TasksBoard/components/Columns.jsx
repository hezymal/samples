import styled from "styled-components";
import Badge from "ui/components/Badge";
import { grey3 } from "ui/styles/colors";
import { paddingSize } from "ui/styles/sizes";

const TitleContainer = styled.div`
    text-align: center;
    padding: ${paddingSize}px 0;
`;

const Columns = styled.div`
    display: flex;
    width: 100%;
    min-height: 250px;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
`;

Columns.Column = styled.div`
    border-right: 1px solid ${grey3};
    width: 100%;

    &:last-child {
        border-right: none;
    }
`;

Columns.Title = ({ children, tasksCount = 0, ...tail }) => {
    return (
        <TitleContainer {...tail}>
            {!tasksCount ? (
                children
            ) : (
                <Badge value={tasksCount}>{children}</Badge>
            )}
        </TitleContainer>
    );
};

export default Columns;
