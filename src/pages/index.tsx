import { NextPageWithLayout } from '../types/pages';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

const Home: NextPageWithLayout = () => {
  return <div>Sanity Check</div>;
};

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
export default Home;
