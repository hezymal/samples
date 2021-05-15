import styled from 'styled-components';
import { grey1, grey2 } from './styles/colors';
import { borderRadius, lineHeight } from './styles/sizes';

const Button = styled.button`
    width: 100%;
    font: inherit;
    background-color: ${grey1};
    border: none;
    border-radius: ${borderRadius}px;
    line-height: ${lineHeight}px;
    cursor: pointer;

    &:hover {
        background-color: ${grey1};
    }

    &:active {
        background-color: ${grey2};
    }
`;

export default Button;
