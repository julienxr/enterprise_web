import { Dispatch, SetStateAction } from 'react';

export interface IHamburgerButton {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerButton: React.FC<IHamburgerButton> = ({ isOpen, setIsOpen }) => {
  const hamburgerLine1 = `${
    isOpen
      ? 'h-[3px] w-3 my-0.5 rounded-full bg-[#989EB3]/50 group-hover:bg-[#3699FF]/50 transition ease transform duration-100'
      : 'h-[3px] w-3 my-0.5 rounded-full bg-[#3699FF]/50 transition ease transform duration-100'
  }`;
  const hamburgerLine2 = `${
    isOpen
      ? 'h-[3px] w-6 my-0.5 rounded-full bg-[#989EB3] group-hover:bg-[#3699FF] transition ease transform duration-100'
      : 'h-[3px] w-6 my-0.5 rounded-full bg-[#3699FF] transition ease transform duration-100'
  }`;
  const hamburgerLine3 = `${
    isOpen
      ? 'h-[3px] w-4 my-0.5 rounded-full bg-[#989EB3]/40 group-hover:bg-[#3699FF]/40 transition ease transform duration-100'
      : 'h-[3px] w-4 my-0.5 rounded-full bg-[#3699FF]/40 transition ease transform duration-100'
  }`;

  return (
    <button
      className="group flex flex-col h-12 w-12 justify-center items-end"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`${hamburgerLine1} ${isOpen ? '-translate-x-3' : ''}`} />
      <div className={`${hamburgerLine2} ${isOpen ? '' : ''}`} />
      <div className={`${hamburgerLine3} ${isOpen ? '-translate-x-2' : ''}`} />
    </button>
  );
};

export default HamburgerButton;
