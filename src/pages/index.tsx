import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SelectCategory, { crumbs } from '../components/select/SelectCategory';
import { NextPageWithLayout } from '../types/pages';

const Home: NextPageWithLayout = () => {
  return <SelectCategory title="All" crumbs={crumbs} />;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
