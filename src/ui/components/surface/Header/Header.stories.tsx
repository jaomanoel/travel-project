import { ComponentMeta, ComponentStory} from "@storybook/react";
import Header from "./Header";

export default {
    title: 'surface/Header',
    component: Header,
    argTypes: {}
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
    return <Header {...args}/>
}

export const Default = Template.bind({});
Default.args = {};