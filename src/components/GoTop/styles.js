import styled, { css } from "styled-components";

export const Container = styled.a`
    ${({ theme, background }) => css`
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.darkBg};
        color: ${theme.colors.lightBg};
        width: 4rem;
        height: 4rem;
        bottom: 4rem;
        right: 4rem;
        z-index: 6;
        `}
`