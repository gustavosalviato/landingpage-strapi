import styled, { css } from "styled-components";

const containerBackgroundActive = (theme) => css`
        background: ${theme.colors.lightBg};
        color: ${theme.colors.darkBg};

`
export const Container = styled.div`
    ${({ theme, background }) => css`
        background: ${theme.colors.darkBg};
        color: ${theme.colors.lightBg};
        min-height: 100vh;
        display: flex;
        align-items: center;
        ${background && containerBackgroundActive(theme)};
    `}

`