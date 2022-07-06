import styled, { css } from "styled-components";
import { Container as SectionContainer } from '../SectionContainer/styles'
import { Title as Heading } from '../Heading/styles';

//Style for Mobile
export const Container = styled.div`
 ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: ${theme.colors.darkBg};
 
    >${SectionContainer}{
        padding-top: 0;
        padding-bottom: 0;
    }


    & ${Heading}{
        padding-top: 0;
        padding-bottom: 0;
    }

    @media ${theme.media.lteMedium}{
    height: 100vh;

    > ${SectionContainer}{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
        scroll-behavior: smooth;

    }


    & ${Heading}{
        display: flex;
        justify-content: center;
        padding-bottom: ${theme.spacings.large};
    }

 }
 `}
 
`;

export const MenuContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;


        @media ${theme.media.lteMedium} {
        display: block;
        text-align: center;
        padding: ${theme.spacings.large} 0;
    }
    `}

    

`
