import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<MenuLink />', () => {
    it('should render a text logo', () => {
        renderTheme(<LogoLink text='hello world' link='#target' />);
        expect(screen.getByRole('link', { name: 'hello world' }));
    });


    it('should render a image logo', () => {
        renderTheme(<LogoLink text='hello world' link='#target' image='image.jpg' />);
        expect(screen.getByRole('img')).toHaveAttribute('src', 'image.jpg');
    });

});

