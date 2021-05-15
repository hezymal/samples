import styled from 'styled-components';
import { grey1, grey2 } from './styles/colors';
import { borderRadius, lineHeight, paddingSize } from './styles/sizes';

const Input = styled.input`
    width: 100%;
    font: inherit;
    background-color: ${grey1};
    border: none;
    border-radius: ${borderRadius}px;
    outline: none;
    line-height: ${lineHeight}px;
    padding: 0 ${paddingSize}px;

    &:hover {
        background-color: ${grey2};
    }

    &:focus {
        background-color: ${grey2};
    }
`;

export default Input;
