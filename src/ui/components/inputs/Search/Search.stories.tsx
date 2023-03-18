import { ComponentMeta, ComponentStory} from "@storybook/react";
import Search from "./Search";

export default {
    title: 'inputs/Search',
    component: Search,
    argTypes: {}
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => {
    return <Search {...args}/>
}

export const Default = Template.bind({});
Default.args = {};