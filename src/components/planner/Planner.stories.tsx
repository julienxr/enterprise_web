import { ComponentMeta, ComponentStory } from '@storybook/react';
import Planner, { IPlanner } from './Planner';
import { mockPlannerProps } from './Planner.mocks';

export default {
  title: 'component/Planner',
  component: Planner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Planner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Planner> = (args) => (
  <Planner {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPlannerProps.base,
} as IPlanner;
