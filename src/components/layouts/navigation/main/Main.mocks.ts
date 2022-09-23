import { IMain } from './Main';
// Mock props that matches the shape of the Base Interface so to quickly test a version of the component either in app or storybook

const base: IMain = {
  children: '<h1>HI</h1>',
};

export const mockMainProps = {
  base,
};
