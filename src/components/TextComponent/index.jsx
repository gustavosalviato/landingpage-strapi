import * as Styled from './styles'
import P from 'prop-types';

export const TextComponent = ({ children }) => {
    return (
        <Styled.Text>
            {children}
        </Styled.Text>
    );
}

TextComponent.propTypes = {
    children: P.node.isRequired,
}
