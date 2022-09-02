import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoLogoEuro } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { links } from '../../../../data';
import HamburgerButton from './HamburgerButton';
import MenuSection from './MenuSection';

export interface ISidebar {}

const Sidebar: React.FC<ISidebar> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed h-screen overflow-auto pb-10 bg-[#1f2433] cursor-pointer ${
        isOpen ? 'w-[265px]' : 'w-[70px]'
      }`}
      onMouseEnter={() => setIsOpen((prev) => !prev)}
      onMouseLeave={() => setIsOpen((prev) => !prev)}
    >
      {/* Sidebar menu header */}
      <div
        className={`${
          isOpen
            ? 'flex justify-between items-center h-[72px] px-6'
            : 'relative top-3 right-1'
        }`}
      >
        {/* Sidebar menu header logo */}
        <Link href="/">
          <a
            className={`${
              isOpen
                ? `flex items-center text-xl font-extrabold text-white `
                : 'hidden'
            }`}
          >
            <IoLogoEuro className="text-[#3699FF] text-2xl" />
            <span className="relative right-0.5 tracking-wide">nterprise</span>
          </a>
        </Link>
        {/* Sidebar hamburger button*/}
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {/* Sidebar menu body*/}
      <div className="mt-5">
        <div className="flex items-center bg-[#181d2e] py-3 pl-6 gap-5 ">
          <RiDashboardLine className="text-[#3699FF]" />
          <p className={`${isOpen ? 'text-white font-medium ' : 'hidden'}`}>
            Dashboard
          </p>
        </div>
        {/* Sidebar menu categories*/}

        {links.map((section) => {
          return (
            <MenuSection
              isOpen={isOpen}
              section={section}
              router={router}
              key={section.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
