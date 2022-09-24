import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectCategory, { ISelectCategory } from './SelectCategory';
import { mockSelectCategoryProps } from './SelectCategory.mocks';

export default {
  title: 'components/SelectCategory',
  component: SelectCategory,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectCategory>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectCategory> = (args) => (
  <SelectCategory {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectCategoryProps.base,
} as ISelectCategory;
