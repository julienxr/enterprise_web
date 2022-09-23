import { useEffect } from 'react';
import { Footer, Navbar } from '..';
import { useLayoutContext } from '../../../../context/LayoutContextProvider';

export interface IMain {
  children: React.ReactNode;
}

const Main: React.FC<IMain> = ({ children }) => {
  const { isOpen, remainOpen, screenSize, setScreenSize } = useLayoutContext();

  useEffect(() => {
    const handleScreenResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleScreenResize);

    handleScreenResize();

    return () => window.removeEventListener('resize', handleScreenResize);
  }, [screenSize, setScreenSize]);

  const workSpaceWidth =
    isOpen && !remainOpen
      ? screenSize - 70
      : remainOpen
      ? screenSize - 265
      : screenSize - 70;

  console.log(workSpaceWidth);

  return (
    <div
      className={`relative flex-col h-screen w-full ${
        remainOpen ? '' : 'left-[70px]'
      } duration-300`}
    >
      <Navbar />
      <main className={`relative top-[72px] h-full  bg-gray-200 duration-300`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
