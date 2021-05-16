import styled from "styled-components";
import Icon from "ui/components/Icon";
import { grey3 } from "ui/styles/colors";

const IconBlock = styled.button`
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

const IconElement = styled(Icon)`
    border: none;
    border-radius: 50%;
    background-color: ${grey3};
`;

const IconButton = ({ iconType, ...tail }) => {
    return (
        <IconBlock {...tail}>
            <IconElement type={iconType} />
        </IconBlock>
    );
};

export default IconButton;
