import React from 'react';
export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <div className={`flex bottom-0  bg-white h-8  duration-300`}>Footer</div>
  );
};

export default Footer;
