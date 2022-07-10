import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp'

export const GoTop = () => {
    return (
        
        <Styled.Container href='#' title='Go To Top' aria-label='Go To Top'>
            <KeyboardArrowUp />
        </Styled.Container>

    );
}