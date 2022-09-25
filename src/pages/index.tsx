import React from 'react';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SelectCategory, { crumbs } from '../components/select/SelectCategory';
import { NextPageWithLayout } from '../types/pages';
import WorkSpace from '../components/workspace/WorkSpace';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SelectCategory title="All" crumbs={crumbs} />
      <WorkSpace />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
