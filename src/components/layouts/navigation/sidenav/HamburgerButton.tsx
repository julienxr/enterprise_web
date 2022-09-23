import { Dispatch, SetStateAction } from 'react';

export interface IHamburgerButton {
  isOpen: boolean;
  remainOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setRemainOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerButton: React.FC<IHamburgerButton> = ({
  isOpen,
  remainOpen,
  setIsOpen,
  setRemainOpen,
}) => {
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

  const hamburgerLine1alt = `${'h-[2px] w-3 my-0.5  bg-white group-hover:bg-[#3699FF]/50 transition ease transform duration-300'}`;
  const hamburgerLine2alt = `${'h-[3px] w-6 my-0.5 rounded-full bg-white group-hover:bg-[#3699FF] transition ease transform duration-100'}`;
  const hamburgerLine3alt = `${'h-[2px] w-3 my-0.5  bg-white group-hover:bg-[#3699FF]/40 transition ease transform duration-300'}`;

  function handleClick() {
    if (isOpen && remainOpen) {
      setIsOpen(false);
      setRemainOpen(false);
    } else {
      setIsOpen(true);
      setRemainOpen(true);
    }
  }

  return remainOpen ? (
    <button
      className="group flex flex-col h-6  w-6  justify-center items-center  border rounded-full duration-500"
      onClick={() => handleClick()}
    >
      <div
        className={`${hamburgerLine1alt} ${
          remainOpen ? 'translate-y-[3px] rotate-45' : ''
        }`}
      />
      <div className={`${hamburgerLine2alt} hidden `} />
      <div
        className={`${hamburgerLine3alt} ${
          remainOpen ? '-translate-y-[3px] -rotate-45' : ''
        }`}
      />
    </button>
  ) : (
    <button
      className="group flex flex-col h-12 w-12 justify-center items-end"
      onClick={() => handleClick()}
    >
      <div className={`${hamburgerLine1} ${!isOpen ? '-translate-x-3' : ''}`} />
      <div className={`${hamburgerLine2} `} />
      <div className={`${hamburgerLine3} ${!isOpen ? '-translate-x-2' : ''}`} />
    </button>
  );
};

export default HamburgerButton;
