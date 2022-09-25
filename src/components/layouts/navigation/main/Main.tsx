import React from 'react';
import { useEffect } from 'react';
import { Footer, Navbar } from '..';
import { useLayoutContext } from '../../../../context/LayoutContextProvider';

export interface IMain {
  children: React.ReactNode;
}

const Main: React.FC<IMain> = ({ children }) => {
  const { remainOpen, screenSize, setScreenSize } = useLayoutContext();

  useEffect(() => {
    const handleScreenResize = () => setScreenSize(document.body.clientWidth);
    window.addEventListener('resize', handleScreenResize);

    handleScreenResize();

    return () => window.removeEventListener('resize', handleScreenResize);
  }, [screenSize, setScreenSize]);

  //const clientWindow = remainOpen ? screenSize - 265 : screenSize - 70;

  return (
    <div
      className={`grow flex-col h-screen 
       duration-300`}
    >
      <Navbar />
      <main
        className={`relative top-[72px] right-0 h-full bg-gray-200 duration-300 ${
          remainOpen ? `` : `ml-[70px]`
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
