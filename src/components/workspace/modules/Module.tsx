import React from 'react';
export interface IModule {
  children: React.ReactNode;
}

const Module: React.FC<IModule> = ({ children }) => {
  return <div className={'flex mb-2 gap-6'}>{children}</div>;
};

export default Module;
