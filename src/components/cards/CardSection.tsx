import React from 'react';
// Use Card Section to govern the percentage of workspace a section of card(s) utilizes
export interface ICardSection {
  children: React.ReactNode;
  className?: string;
}
const CardSection: React.FC<ICardSection> = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

export default CardSection;
