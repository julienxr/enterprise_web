import React from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import MenuItem from './MenuItem';

export interface IMenuSection {
  isOpen: boolean;
  section: {
    title: string;
    links: {
      name: string;
      icon: Function;
      subcategory: {
        name: string;
        icon: Function;
      }[];
    }[];
  };
}

const MenuSection: React.FC<IMenuSection> = ({ isOpen, section }) => {
  {
    /* Can i place router in context? */
  }
  return (
    <section className="mt-3" key={section.title}>
      {isOpen ? (
        <p className="text-[#606A8C] font-medium m-3 mt-4 uppercase">
          {section.title}
        </p>
      ) : (
        <IoEllipsisHorizontal className="text-gray-500 ml-6" />
      )}
      {/* SideNav menu sub-categories*/}
      <ul>
        {section.links.map((item) => (
          <MenuItem key={item.name} isOpen={isOpen} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
