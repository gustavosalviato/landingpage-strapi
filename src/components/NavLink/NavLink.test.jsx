import { screen } from '@testing-library/react';
import { renderTheme } from "../../styles/render-theme";
import { NavLink } from '.'
import links from './mock'

describe('<NavLink />', () => {
    it('should render links', () => {
        renderTheme(<NavLink links={links} />);
        expect(screen.getAllByRole('link')).toHaveLength(links.length);
    })


    it('should not render link', () => {
        renderTheme(<NavLink />);
        expect(screen.queryAllByText(/link/i)).toHaveLength(0);
    })


    it('should not render link', () => {
        renderTheme(<NavLink links={links} />);
        expect(screen.getByText(/link 10/i).parentElement).toHaveStyle('flex-flow: row wrap');
    })

});



