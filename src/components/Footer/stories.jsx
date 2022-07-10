import { Footer } from ".";
export default {
    title: 'Footer',
    component: Footer,
    args: {
        html: '<p><a href="https://github.com/gustavosalviato">Made by ♥ Gustavo Henrique</a></p>'
    },
}

export const Template = (args) => <Footer {...args} />;