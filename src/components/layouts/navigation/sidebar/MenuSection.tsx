import { NextRouter } from 'next/router';
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
  router: NextRouter;
}

const MenuSection: React.FC<IMenuSection> = ({ isOpen, section, router }) => {
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
        <IoEllipsisHorizontal className="text-[#606A8C] ml-6" />
      )}
      {/* Sidebar menu sub-categories*/}
      <ul>
        {section.links.map((item) => (
          <MenuItem
            key={item.name}
            isOpen={isOpen}
            item={item}
            router={router}
          />
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
