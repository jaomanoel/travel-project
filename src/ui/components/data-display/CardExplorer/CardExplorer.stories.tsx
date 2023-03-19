import { ComponentMeta, ComponentStory} from "@storybook/react";
import CardExplorer from "./CardExplorer";

export default {
    title: 'data-display/CardExplorer',
    component: CardExplorer,
    argTypes: {}
} as ComponentMeta<typeof CardExplorer>;

const Template: ComponentStory<typeof CardExplorer> = (args) => {
    return <CardExplorer {...args}/>
}

export const Default = Template.bind({});
Default.args = {};