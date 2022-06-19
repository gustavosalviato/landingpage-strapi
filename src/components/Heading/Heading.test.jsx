import { renderTheme } from "../../styles/render-theme";
import { Heading } from '.'
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
    it('should render with default values', () => {
        renderTheme(<Heading>Something</Heading>);

        const heading = screen.getByRole('heading', { name: 'Something' });

        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.small,
            'text-transform': 'none'
        });
    })
});


describe('<Heading />', () => {
    it('should render correct heading sizes', () => {
        renderTheme(<Heading size="small">Something</Heading>);

        const heading = screen.getByRole('heading', { name: 'Something' });

        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.small,
        });
    })
});


describe('<Heading />', () => {
    it('should render correct heading sizes', () => {
        renderTheme(<Heading size="medium">Something</Heading>);
        const heading = screen.getByRole('heading', { name: 'Something' });

        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.medium,
        });
    })
});


describe('<Heading />', () => {
    it('should render correct heading sizes', () => {
        renderTheme(<Heading size="large">Something</Heading>);

        const heading = screen.getByRole('heading', { name: 'Something' });

        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.large,
        });
    })
});

describe('<Heading />', () => {
    it('should render correct heading sizes', () => {
        renderTheme(<Heading size="xlarge">Something</Heading>);

        const heading = screen.getByRole('heading', { name: 'Something' });

        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.xlarge,
        });
    })
});


describe('<Heading />', () => {
    it('should render uppercase letters', () => {
        renderTheme(<Heading uppercase>Something</Heading>);

        const heading = screen.getByRole('heading', { name: 'Something' });

        expect(heading).toHaveStyle({
            'text-transform': 'uppercase',
        });
    })
});


describe('<Heading />', () => {
    it('should render correct heading element', () => {
        const { container } = renderTheme(<Heading as="h6">Something</Heading>);
        const heading = screen.getByRole('heading', { name: 'Something' });
        const h6 = container.querySelector('h6');
        expect(h6.tagName.toLowerCase()).toBe('h6');

    })
});










