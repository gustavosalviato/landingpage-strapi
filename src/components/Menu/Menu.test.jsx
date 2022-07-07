import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from "../../styles/render-theme";
import { Menu } from '.'
import Links from '../NavLink/mock'
import { theme } from '../../styles/theme'
const logoData = {
    text: 'Logo',
    link: '#target',
    src: 'image.png'
}

describe('<Menu />', () => {
    it('should render Logo and  MainMenu', () => {
        const { container } = renderTheme(<Menu links={Links} logoData={logoData} />);
        expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
        expect(screen.getByRole('navigation', { name: 'Main Menu' })).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });



    it('should render menu mobile and button for open and close the menu', () => {
        const { container } = renderTheme(<Menu links={Links} logoData={logoData} />);
        const button = screen.getByLabelText('Open/Close Menu');
        // const menuButton = button.nextSibling();
        expect(button).toHaveStyle('display: none');

        expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();
    });

    it('should not render links', () => {
        const { container } = renderTheme(<Menu logoData={logoData} />);

        expect(screen.queryByRole('navigation', { name: 'Main Menu' }).firstChild).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    })

});







