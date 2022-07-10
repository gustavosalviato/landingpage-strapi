import styled, { css } from "styled-components"
import { Text } from '../TextComponent/styles';

export const Container = styled.div`
    ${({ theme }) => css`
            text-align: center;
            border-top: 0.1rem solid #DDD;

            a{
                text-decoration: none;
            }            

            ${Text}{
                font-size: ${theme.font.sizes.small};
            }      

           
    `}
`







