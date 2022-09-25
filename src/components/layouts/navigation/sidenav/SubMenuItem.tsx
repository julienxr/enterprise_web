import React from 'react';

export interface ISubMenuItem {
  category: {
    name: string;
    icon: Function;
  };
  visible: boolean;
  isOpen: boolean;
}

const SubMenuItem: React.FC<ISubMenuItem> = ({ category, visible, isOpen }) => {
  const subCategoryLink =
    'group flex items-center gap-1 pl-10 py-2 text-sm cursor-pointer text-[#989EB3] hover:text-white hover:bg-[#181d2e] duration-500';

  return (
    <div
      className={`${
        isOpen ? (visible ? subCategoryLink : 'hidden') : 'hidden'
      } `}
    >
      <span>{category.icon('group-hover:text-[#3699FF] text-lg')}</span>
      <span className="capitalize ">{category.name}</span>
    </div>
  );
};

export default SubMenuItem;
