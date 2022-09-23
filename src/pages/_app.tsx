import type { AppProps } from 'next/app';
import '../styles/globals.css';
import type { NextPageWithLayout } from '../types/pages';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
