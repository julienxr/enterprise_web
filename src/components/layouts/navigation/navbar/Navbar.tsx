import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { BsFillSunFill, BsFillXDiamondFill, BsSearch } from 'react-icons/bs';
import { IoStatsChartOutline } from 'react-icons/io5';
import PROFILE from '../../../../../public/gabriel-silverio.jpg';
import AFLOGO from '../../../../../public/united_states_of_america_square_icon_64.png';
import { useLayoutContext } from '../../../../context/LayoutContextProvider';
import NavItem from './NavItem';

export interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  const { remainOpen } = useLayoutContext();
  return (
    <header
      className={`fixed flex items-stretch top-0 right-0 h-[72px] bg-white  z-40 ${
        remainOpen ? 'left-[265px]' : 'left-[70px]'
      } duration-200`}
    >
      {/* Header Container */}
      <div className={`flex justify-between items-stretch w-full px-[30px] `}>
        {/* Left Section */}
        <div className={`flex items-stretch`}>
          <nav className={`flex items-stretch`}>
            <NavItem title="Dashboards" active={true} />
            <NavItem title="Pages" />
            <NavItem title="Apps" />
            <NavItem title="Layout" />
            <NavItem title="Help" />
          </nav>
        </div>
        {/* Left Section -- End */}

        {/* Right Section */}
        <div className={`flex items-stretch`}>
          <nav className={`flex items-stretch`}>
            <NavItem>
              <BsSearch />
            </NavItem>
            <NavItem>
              <IoStatsChartOutline />
            </NavItem>
            <NavItem>
              <BsFillXDiamondFill />
            </NavItem>
            <NavItem>
              <BiMessageDetail />
            </NavItem>
            <NavItem
              image={AFLOGO}
              alt={'American Flag'}
              width={40}
              height={30}
            />
            <NavItem>
              <BsFillSunFill />
            </NavItem>
            <NavItem
              image={PROFILE}
              alt={'Picture of user'}
              width={35}
              height={42}
              styles={{ borderRadius: '10px' }}
            />
          </nav>
        </div>
        {/* Right Section -- End */}
      </div>
      {/* Header Container -- End */}
    </header>
  );
};

export default Navbar;
