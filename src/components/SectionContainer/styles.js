import styled, { css } from "styled-components";


export const Container = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.lightBg};
        width: 120rem;
        margin: 0 auto;
        padding: ${theme.spacings.medium};
        width: 100%;
    `}
`