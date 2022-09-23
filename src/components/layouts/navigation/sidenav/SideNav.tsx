import Link from 'next/link';
import { CgEventbrite } from 'react-icons/cg';
import { RiDashboardLine } from 'react-icons/ri';
import { useLayoutContext } from '../../../../context/LayoutContextProvider';
import { links } from '../../../../data';
import HamburgerButton from './HamburgerButton';
import MenuSection from './MenuSection';

export interface ISideNav {}

const SideNav: React.FC<ISideNav> = () => {
  const { isOpen, setIsOpen, remainOpen, setRemainOpen } = useLayoutContext();

  function handleHoverIntoSideNav() {
    if (remainOpen) return;
    setIsOpen(true);
  }

  function handleHoverOutOfSideNav() {
    if (remainOpen) return;
    setIsOpen(false);
  }

  return (
    <div
      className={`flex-0 top-0 left-0 bottom-0 pb-10 z-50 bg-navy-blue cursor-pointer ${
        isOpen ? 'w-[265px]' : 'w-[70px]'
      } ${!remainOpen ? 'fixed' : ''} duration-500`}
      onMouseEnter={() => handleHoverIntoSideNav()}
      onMouseLeave={() => handleHoverOutOfSideNav()}
    >
      {/* SideNav Header -- Begin */}
      <div
        className={`${
          isOpen
            ? 'flex justify-between items-center h-[72px] px-6 border-b border-light-blue/30 border-dashed'
            : 'relative top-3 right-1'
        }`}
      >
        {/* SideNav Header Logo */}
        <Link href="/">
          <a>
            <div
              className={`${
                isOpen
                  ? `flex items-center text-xl font-extrabold text-white `
                  : 'hidden'
              }`}
            >
              <CgEventbrite className="text-light-blue text-2xl" />
              <span className="right-0.5 tracking-wide">nterprise</span>
            </div>
          </a>
        </Link>

        {/* SideNav Header Button*/}
        <HamburgerButton
          isOpen={isOpen}
          remainOpen={remainOpen}
          setIsOpen={setIsOpen}
          setRemainOpen={setRemainOpen}
        />
      </div>
      {/* SideNav Header -- End*/}

      {/* SideNav Body   -- Begin*/}
      <div className="mt-5">
        <div className="flex items-center bg-[#181d2e] py-3 pl-6 gap-5 ">
          <RiDashboardLine className="text-light-blue" />
          <p className={`${isOpen ? 'text-white font-medium ' : 'hidden'}`}>
            Dashboard
          </p>
        </div>

        {/* SideNav Sections*/}
        {links.map((section) => {
          return (
            <MenuSection
              isOpen={isOpen}
              section={section}
              key={section.title}
            />
          );
        })}
      </div>
      {/* SideNav Body   -- End*/}
    </div>
  );
};

export default SideNav;
