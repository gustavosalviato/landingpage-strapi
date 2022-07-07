import styled, { css } from "styled-components";
import { Title } from '../Heading/styles';

export const Container = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: ${theme.spacings.large};

        @media ${theme.media.lteMedium}{
            grid-template-columns: 1fr;
            text-align: center;
        }

        ${Title}{
            margin-bottom: ${theme.spacings.large}
        }
    `}

`

export const TextContainer = styled.div`
    ${({ theme }) => css`
        @media ${theme.media.lteMedium}{
            margin-bottom: ${theme.spacings.large};
        }
        
    `}

`


export const ImageContaner = styled.div`
    ${({ theme }) => css`
        width: 600px;
        height: 600px;
    `}

`


export const Image = styled.img`
    ${({ theme }) => css`
        width: 100%;
        fill: red;
    `}

`