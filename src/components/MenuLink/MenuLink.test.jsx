import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';
import { Children } from 'react';

describe('<MenuLink />', () => {
    it('should render a link', () => {
        renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
        expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
            'target',
            '_self',
        );
    });

});

it('should render open in a new tab', () => {
    renderTheme(<MenuLink link="http://localhost" newTab={true}>Children
    </MenuLink>);

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank',)
});

it('should render render in the same tab', () => {
    renderTheme(<MenuLink link='http://localhost' newTab={false}> Children</ MenuLink>);

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self');
})