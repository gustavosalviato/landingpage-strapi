import { LogoLink } from ".";

export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
        text: 'LogoLink',
        image: 'https://img.icons8.com/doodle/344/coffee-to-go.png',
        link: 'http://localhost',
    },

}

export const OnlyImage = (args) => {
    return (

        <div style={{ display: 'flex' }}>
            <LogoLink {...args} />;
        </div>
    );
}

export const OnlyText = (args) => {
    return (

        <div style={{ display: 'flex' }}>
            <LogoLink {...args} />;
        </div>
    );
}

OnlyText.args = {
    image: '',
}



