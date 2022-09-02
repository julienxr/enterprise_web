import { IBaseTemplate } from './BaseTemplate';
// Mock props that matches the shape of the Base Interface so to quickly test a version of the component either in app or storybook

const base: IBaseTemplate = {
  sampleTextProp: 'Greetings Earthlings',
};

export const mockBaseTemplateProps = {
  base,
};
