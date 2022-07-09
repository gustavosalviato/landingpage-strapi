import { GridText } from ".";
import mock from './mock'
export default {
    title: 'GridText',
    component: GridText,
    args: mock,

    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }

}

export const Template = (args) => <GridText {...args} />;