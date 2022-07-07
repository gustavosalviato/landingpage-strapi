import styled, { css } from "styled-components";
import { Container as SectionContainer } from '../SectionContainer/styles'
import { Title as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
    visibility: visible;
    opacity: 1;
`;

//Style for Mobile
export const Container = styled.div`
 ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: ${theme.colors.darkBg};
    transition: all 300ms ease-in-out;
 
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
    visibility: hidden;
    opacity: 0;
    ${visible && menuVisible(theme)}

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

 }`}
 
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


`;

export const Button = styled.button`
    ${({ theme, visible }) => css`
        z-index: 6;
        position: fixed;
        top: 2rem;
        right: 2rem;
        width: 4rem;
        height: 4rem;
        background: ${theme.colors.darkBg};
        color: ${theme.colors.lightBg};
        border: none;
        display: none;
        cursor: pointer;
        pointer-events: ${visible ? 'none' : 'all'};

        @media ${theme.media.lteMedium}{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `}

    >svg{
        width: 2.5rem;
        height: 2.5rem;
    }


`;
