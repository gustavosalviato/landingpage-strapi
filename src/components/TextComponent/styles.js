import styled, { css } from 'styled-components'

export const Text = styled.div`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.lightBg};
        font-family: ${theme.font.family.default}
    `}

`;