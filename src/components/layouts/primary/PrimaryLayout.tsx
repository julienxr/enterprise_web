import Head from 'next/head';
import { meta } from '../../../utils/globalMeta';
import { Footer, Navbar, Sidebar } from '../navigation';

export interface IPrimaryLayout {
  children?: React.ReactNode;
  styles?: string[];
}

const PrimaryLayout: React.FC<IPrimaryLayout> = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Sidebar />
      <Navbar />
      <main></main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
