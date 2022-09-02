import Link from 'next/link';
import { NextRouter } from 'next/router';
import { useState } from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import SubMenuItem from './SubMenuItem';

export interface IMenuItem {
  isOpen: boolean;
  item: {
    name: string;
    icon: Function;
    subcategory: {
      name: string;
      icon: Function;
    }[];
  };
  router: NextRouter;
}

const MenuItem: React.FC<IMenuItem> = ({ isOpen, item, router }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const normalLink =
    'group flex items-center justify-between px-6 py-3 text-md text-[#989EB3] hover:text-white hover:bg-[#181d2e] transition duration-0 ease-out hover:ease-in-out hover:duration-300';
  const activeLink =
    'flex items-center gap-5 pl-6 pt-3 pb-2.5  text-md text-[#989EB3] text-white bg-[#181d2e]';

  return (
    <li key={item.name}>
      {item.subcategory.length ? (
        <>
          <div
            className={`${normalLink} cursor-pointer`}
            onClick={() => setOpenDropdown((prev) => !prev)}
          >
            <div className="flex items-center gap-5">
              <span>{item.icon('group-hover:text-[#3699FF]')}</span>
              <span className={`${isOpen ? 'capitalize' : 'hidden'}`}>
                {item.name}
              </span>
            </div>
            <span>
              <IoChevronForwardOutline
                className={`${
                  isOpen ? (openDropdown ? 'rotate-90' : '') : 'hidden'
                }`}
              />
            </span>
          </div>
          {item.subcategory.map((category) => (
            <SubMenuItem
              key={category.name}
              category={category}
              visible={openDropdown}
              isOpen={isOpen}
            />
          ))}
        </>
      ) : router.pathname == `/${item.name}` ? (
        <Link href={`/${item.name}`} key={item.name}>
          <a className={activeLink}>
            <div>
              <span>{item.icon('text-[#3699FF]')}</span>
              <span className={`${isOpen ? 'capitalize' : 'hidden'}`}>
                {item.name}
              </span>
            </div>
          </a>
        </Link>
      ) : (
        <Link href={`/${item.name}`} key={item.name}>
          <a className={normalLink}>
            <div className="flex items-center gap-5">
              <span>{item.icon('group-hover:text-[#3699FF]')}</span>
              <span className={`${isOpen ? 'capitalize' : 'hidden'}`}>
                {item.name}
              </span>
            </div>
          </a>
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
