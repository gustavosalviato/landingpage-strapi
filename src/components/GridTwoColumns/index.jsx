import * as Styled from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridTwoColumns = ({ title, text, background = false, srcImg }) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container background={background}>
                <Styled.TextContainer>
                    <Heading uppercase background={background}>
                        {title}
                    </Heading>
                    <TextComponent>
                        {text}
                    </TextComponent>
                </Styled.TextContainer>

                <Styled.ImageContaner>
                    <Styled.Image src={srcImg} alt={title} />
                </Styled.ImageContaner>

            </Styled.Container>

        </SectionBackground>

    );

}

GridTwoColumns.propTypes = {
    title: P.string.isRequired,
    text: P.string.isRequired,
    background: P.bool,
    srcImg: P.string.isRequired,
}