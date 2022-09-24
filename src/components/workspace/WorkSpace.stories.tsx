import { ComponentMeta, ComponentStory } from '@storybook/react';
import WorkSpace, { IWorkSpace } from './WorkSpace';
import { mockWorkSpaceProps } from './WorkSpace.mocks';

export default {
  title: 'components/WorkSpace',
  component: WorkSpace,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof WorkSpace>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WorkSpace> = (args) => (
  <WorkSpace {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockWorkSpaceProps.base,
} as IWorkSpace;
