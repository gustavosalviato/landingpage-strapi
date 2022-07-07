import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, html, background = false }) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container background={background}>
                <Heading uppercase>{title}</Heading>

                <Styled.Html background={background}>
                    <TextComponent>{html}</TextComponent>
                </Styled.Html>
            </Styled.Container>
        </SectionBackground>

    );
}

GridContent.propTypes = {
    title: P.string.isRequired,
    html: P.string.isRequired,
    background: P.bool,
}