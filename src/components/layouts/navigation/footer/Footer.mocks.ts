import { IFooter } from './Footer';
// Mock props that matches the shape of the Base Interface so to quickly test a version of the component either in app or storybook

const base: IFooter = {
  sampleTextProp: 'Greetings Earthlings',
};

export const mockFooterProps = {
  base,
};
