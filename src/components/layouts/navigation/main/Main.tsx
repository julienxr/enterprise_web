import { useEffect } from 'react';
import { Footer, Navbar } from '..';
import { useLayoutContext } from '../../../../context/LayoutContextProvider';

export interface IMain {
  children: React.ReactNode;
}

const Main: React.FC<IMain> = ({ children }) => {
  const { isOpen, remainOpen, screenSize, setScreenSize } = useLayoutContext();

  useEffect(() => {
    const handleScreenResize = () => setScreenSize(document.body.clientWidth);
    window.addEventListener('resize', handleScreenResize);

    handleScreenResize();

    return () => window.removeEventListener('resize', handleScreenResize);
  }, [screenSize, setScreenSize]);

  const clientWindow = remainOpen ? screenSize - 265 : screenSize - 70;

  console.log(clientWindow);

  return (
    <div
      className={`relative flex-col h-screen w-[${clientWindow}px] ${
        remainOpen ? '' : 'left-[70px]'
      } duration-300`}
    >
      <Navbar />
      <main
        className={`relative top-[72px] right-0 h-full bg-gray-200 duration-300 ${
          remainOpen ? `w-[${clientWindow}px]` : ''
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
