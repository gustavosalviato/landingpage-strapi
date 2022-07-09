import { renderTheme } from "../../styles/render-theme";
import { screen } from '@testing-library/react';
import mock from './mock';
import { GridText } from ".";
describe('<GridText />', () => {
    it('should render grid text with background', () => {
        const { container } = renderTheme(<GridText {...mock} background />);

        expect(container).toMatchSnapshot();

    })

    it('should render grid text without background', () => {
        const { container } = renderTheme(<GridText {...mock} background={undefined} />);

        expect(container).toMatchSnapshot();

    })
});




