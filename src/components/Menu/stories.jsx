import { Menu } from ".";
import Links from '../NavLink/mock'
export default {
    title: 'Menu',
    component: Menu,
    args: {
        logoData: {
            text: 'Logo',
            link: '#target',
            srcImg: '',
        },

        links: Links,
    },

    argTypes: {
        children: { type: 'string' }
    },

}

export const Template = (args) => {
    return (

        <div >
            <Menu {...args} />;
        </div >
    );
}




