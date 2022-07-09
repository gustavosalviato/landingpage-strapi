import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ title, description, grid, background = false }) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container>
                <Heading >{title}</Heading>
                <TextComponent >{description}</TextComponent>
                <Styled.Grid>
                    {grid.map((el, key) => (
                        <Styled.GridElement key={`${el.srcImg}-${el.srcImg}`}>
                            <Styled.Image src={el.srcImg} alt={el.srcImg} />
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground >

    );
}

GridImage.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    background: P.bool,
    grid: P.arrayOf(P.shape({
        srcImg: P.string.isRequired,
        altText: P.string.isRequired,
    }).isRequired,
    )
}