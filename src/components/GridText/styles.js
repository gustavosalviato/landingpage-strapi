import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'
import { Text } from '../TextComponent/styles'
export const Container = styled.div`
    ${({ theme }) => css`
        ${Text}{
            margin-bottom: ${theme.spacings.small};;
        }

    `}
`
export const Grid = styled.div`
    ${({ theme }) => css`
        counter-reset: grid-counter;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.spacings.medium};
        overflow: hidden;
        width: 100%;

        @media ${theme.media.lteMedium}{
            grid-template-columns: 1fr;
            
        }
    `}
`

export const GridElement = styled.div`
    ${({ theme }) => css`
        ${Title}{
            position: relative;
            left: 5rem
        }
    

        ${Title}::before{
            counter-increment: grid-counter;
            content: counter(grid-counter);
            position: absolute;
            left: -5rem;
            font-size: 6rem;
            top: -2rem;
            transform: rotate(10deg);
        }
    
    `}
`



