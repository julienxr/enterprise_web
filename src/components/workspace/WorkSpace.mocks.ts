import { IWorkSpace } from './WorkSpace';
// Mock props that matches the shape of the Base Interface so to quickly test a version of the component either in app or storybook

const base: IWorkSpace = {
  sampleTextProp: 'Greetings Earthlings',
};

export const mockWorkSpaceProps = {
  base,
};
