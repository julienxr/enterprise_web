import { ISidebar } from './Sidebar';
// Mock props that matches the shape of the Base Interface so to quickly test a version of the component either in app or storybook

const base: ISidebar = {
  sampleTextProp: 'Greetings Earthlings',
};

export const mockSidebarProps = {
  base,
};
