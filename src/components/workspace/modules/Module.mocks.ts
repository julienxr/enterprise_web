import { IModule } from './Module';
// Mock props that matches the shape of the Base Interface so to quickly test a version of the component either in app or storybook

const base: IModule = {
  children: '<h1>Hi</h1>',
};

export const mockModuleProps = {
  base,
};
