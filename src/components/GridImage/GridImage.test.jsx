import { renderTheme } from "../../styles/render-theme";
import { screen } from '@testing-library/react';
import mock from './mock';
import { GridImage } from ".";
describe('<GridImage />', () => {
    it('should render grid image with background', () => {
        const { container } = renderTheme(<GridImage {...mock} background />);

        expect(container).toMatchSnapshot();

    })


    it('should render grid image without background', () => {
        const { container } = renderTheme(<GridImage {...mock} background={undefined} />);

        expect(container).toMatchSnapshot();

    })

  
});




