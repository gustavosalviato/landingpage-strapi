import { TextComponent } from "."
export default {
    title: 'Text Component',
    component: TextComponent,

    args: {
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa itaque enim iusto nostrum cum explicabo. Quisquam illum, itaque earum perferendis cupiditate reiciendis inventore corporis?`

    },

    argTypes: {
        children: { type: 'string' },

    }
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>

    );
}