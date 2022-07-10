import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
    it('should render a got to top button', () => {
        const { container } = renderTheme(<GoTop />);
        expect(screen.getByRole('link', { name: 'Go To Top' })).toBeInTheDocument();

        expect(screen.getByRole('link', { name: 'Go To Top' })).toHaveAttribute('href', '#');

        expect(container).toMatchSnapshot();

    });

});

