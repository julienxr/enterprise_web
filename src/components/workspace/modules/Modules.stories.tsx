import { ComponentMeta, ComponentStory } from '@storybook/react';
import Module, { IModule } from './Module';
import { mockModuleProps } from './Module.mocks';

export default {
  title: 'workspace/Modules',
  component: Module,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Module>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Module> = (args) => <Module {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockModuleProps.base,
} as IModule;
