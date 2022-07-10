import * as Styled from './styles';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer'
import { TextComponent } from '../TextComponent'

export const Footer = ({ html }) => {
    return (
        <SectionContainer>
            <Styled.Container>
                <TextComponent>{html}</TextComponent>
            </Styled.Container>
        </SectionContainer>
    );
}

Footer.propTypes = {
    html: P.string.isRequired,
}