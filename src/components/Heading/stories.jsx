import { Heading } from ".";

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'Teste'
    },

    argTypes: {
        children: { type: 'string' }
    },

    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }

}

export const Light = (args) => <Heading {...args} />;