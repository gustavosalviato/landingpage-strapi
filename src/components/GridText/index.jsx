import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'
import P, { shape } from 'prop-types'

export const GridText = ({ title, description, background = false, grid }) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container>
                <Heading
                    uppercase
                    background={background}
                >
                    {title}
                </Heading>

                <TextComponent>{description}</TextComponent>

                <Styled.Grid>
                    {grid.map((el, key) => (
                        <Styled.GridElement key={key}>
                            <Heading uppercase >{el.title}</Heading>
                            <TextComponent>{el.description}</TextComponent>
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>

    );
}

GridText.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    background: P.bool,
    grid: P.arrayOf(P.shape({
        title: P.string.isRequired,
        description: P.string.isRequired,
    })
    ).isRequired,
}