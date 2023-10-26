
import SearchBar, { SearchBarProps } from "./SearchBar";
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: "SearchBar",
    component: SearchBar
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "Default",
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: "Secondary",
};