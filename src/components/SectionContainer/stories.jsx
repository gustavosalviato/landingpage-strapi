import { SectionContainer } from "."
export default {
    title: 'SectionContainer',
    component: SectionContainer,

    args: {
        children: (
            <div>
                <h1>Section Container</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quis ea pariatur aperiam sint illo labore reiciendis quos impedit? Vitae quas, placeat enim porro dolorum quasi accusamus facere voluptatum. Saepe id alias voluptatum, tenetur laboriosam ab ducimus, voluptas ipsa consequuntur facilis maxime voluptate eos. Quod dolore repudiandae perferendis eaque beatae, commodi, pariatur temporibus excepturi accusantium minus sit laboriosam explicabo aliquam inventore hic corrupti autem nisi reprehenderit sequi consequuntur porro, iste ipsum modi reiciendis! Maxime soluta eaque adipisci, harum inventore veniam eveniet ex cupiditate debitis quo quasi obcaecati culpa. Assumenda corporis quos quibusdam mollitia quas quia ut repudiandae atque ipsum possimus?</p>
            </div>


        ),

    },

    argTypes: {
        children: { type: '' },

    }
};

export const Template = (args) => {
    return (
        <div>
            <SectionContainer {...args} />
        </div>

    );
}