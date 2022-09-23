import { ComponentMeta, ComponentStory } from '@storybook/react';
import Main, { IMain } from './Main';
import { mockMainProps } from './Main.mocks';

export default {
  title: 'templates/Main',
  component: Main,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Main>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMainProps.base,
} as IMain;
