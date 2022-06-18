import * as Styled from './styles'
import P from 'prop-types';

export const Heading = ({ children, as = 'h1', size = 'small', uppercase = false }) => {
    return (
        <Styled.Title
            as={as}
            size={size}
            uppercase={uppercase}
        >
            {children}

        </Styled.Title>
    );
}


Heading.propTypes = {
    children: P.node.isRequired,
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    size: P.oneOf(['small', 'medium', 'large']),
    uppercase: P.bool.isRequired,
}