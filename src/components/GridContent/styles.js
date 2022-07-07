import styled, { css } from "styled-components";
import { Title } from '../Heading/styles';
import { Text } from '../TextComponent/styles';
export const Container = styled.div`
    ${({ theme, background }) => css`
        max-width: 58rem;
        text-align: center;
        margin: 0 auto;

        ${Title}{
            color: ${background ? theme.colors.darkBg : theme.colors.lightBg};
        }
    `}
`

export const Html = styled.div`
    ${({ theme, background }) => css`
        margin: ${theme.spacings.xlarge} 0;

        ${Text}{
        color: ${background ? theme.colors.darkBg : theme.colors.lightBg};        
    }
    `}

   
`
