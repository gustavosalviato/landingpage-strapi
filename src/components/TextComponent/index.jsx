import * as Styled from './styles'
import P from 'prop-types';

export const TextComponent = ({ children }) => {
    return (
        <Styled.Text dangerouslySetInnerHTML={{ __html: children }} />


    );
}

TextComponent.propTypes = {
    children: P.node.isRequired,
}
