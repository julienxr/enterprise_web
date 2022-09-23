import Head from 'next/head';
import { LayoutProvider } from '../../../context/LayoutContextProvider';
import { meta } from '../../../utils/globalMeta';
import { Main, SideNav } from '../navigation';

export interface IPrimaryLayout {
  children?: React.ReactNode;
  styles?: string[];
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <LayoutProvider>
        <div className={`flex`}>
          <SideNav />
          <Main>{children}</Main>
        </div>
      </LayoutProvider>
    </>
  );
};

export default PrimaryLayout;
