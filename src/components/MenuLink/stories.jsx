import { MenuLink } from ".";

export default {
    title: 'MenuLink',
    component: MenuLink,
    args: {
        children: 'MenuLink',
        link: 'https://github.com/gustavosalviato/landingpage-strapi/tree/b8428613e88a773106013af618c9d4dfd52b4fdf/src/components/TextComponent',
    },

    argTypes: {
        children: { type: 'string' }
    },

}

export const Template = (args) => {
    return (

        <div style={{ display: 'flex' }}>
            <MenuLink {...args} />;
        </div>
    );
}


