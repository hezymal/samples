import styled from "styled-components";
import { grey3 } from "ui/styles/colors";
import { borderRadius, paddingSize } from "ui/styles/sizes";

const Task = styled.div`
    margin: ${paddingSize}px;
    padding: ${paddingSize}px;
    border: 1px solid ${grey3};
    border-radius: ${borderRadius}px;
    cursor: pointer;
`;

export default Task;
