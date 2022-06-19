import styled, { css } from 'styled-components'

export const titleSize = {
    small: (theme) => css`
        font-size: ${theme.font.sizes.small}
    `,

    medium: (theme) => css`
        font-size: ${theme.font.sizes.medium}
    `,

    large: (theme) => css`
        font-size: ${theme.font.sizes.large};
        ${mediaFont(theme)}
    `,

    xlarge: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
`,
};

const titleCase = (uppercase) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    
`;

const mediaFont = (theme) => css`
    @media ${theme.media.lteMedium}{
        font-size: ${theme.font.sizes.xlarge};
    }

`;

export const Title = styled.h1`
    ${({ theme, size, uppercase }) => css`
        color: ${theme.colors.lightBg};
        ${titleSize[size](theme)};
        ${titleCase(uppercase)}
    `}; 

    

`;