import styled, { css } from 'styled-components';
import { defaultBorder } from './styles/borders';
import { paddingSize } from './styles/sizes';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 15% 60% 25%;
    grid-template-rows: 47px auto;
    height: 100%;
`;

Layout.Top = styled.div`
    grid-column: 1 / 4;
    grid-row: 1;
    padding: ${paddingSize}px;
    border-bottom: ${defaultBorder};
`;

Layout.Left = styled.div`
    grid-column: 1;
    grid-row: 2;
    padding: ${paddingSize}px;
`;

Layout.Middle = styled.div`
    grid-column: 2;
    grid-row: 2;
    padding: ${paddingSize}px;
    border-left: ${defaultBorder};
    border-right: ${defaultBorder};

    ${props => props.full && css`
        grid-column: 1 / 4;
        border-left: none;
        border-right: none;
    `}
`;

Layout.Right = styled.div`
    grid-column: 3;
    grid-row: 2;
    padding: ${paddingSize}px;
`;

export default Layout;
