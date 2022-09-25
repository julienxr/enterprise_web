import { ICard } from './Card';
// Mock props that matches the shape of the Base Interface so to quickly test a version of the component either in app or storybook

const base: ICard = {
  title: 'Title',
};

export const mockCardProps = {
  base,
};
