import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../types/pages';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h1>Hello out there</h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
