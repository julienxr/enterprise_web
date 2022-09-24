import { crumbs, ISelectCategory } from './SelectCategory';
// Mock props that matches the shape of the Base Interface so to quickly test a version of the component either in app or storybook

const base: ISelectCategory = {
  title: 'All',
  crumbs,
};

export const mockSelectCategoryProps = {
  base,
};
