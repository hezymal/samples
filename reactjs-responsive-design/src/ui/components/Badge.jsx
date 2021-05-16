import styled, { css } from 'styled-components';
import { purple1 } from 'ui/styles/colors';

const Badge = styled.span`
    ${props => css`
        position: relative;

        &:after {
            position: absolute;
            content: "${props.value}";
            display: inline-block;
            right: -20px;
            top: -5px;
            background-color: ${purple1};
            border-radius: 50%;
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-size: 0.80em;
        }
    `}
`;

export default Badge;
