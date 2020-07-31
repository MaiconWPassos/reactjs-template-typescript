import React from 'react';
import Layout from '~/components/Layout';

import { DashboardContainer } from './styles';
import Input from '~/components/Input';

const Dashboard: React.FC = () => {
  return (
    <Layout title={`${process.env.REACT_APP_NAME}`}>
      <DashboardContainer>
        <Input id="search" placeholder="Pesquisar" />
      </DashboardContainer>
    </Layout>
  );
};

export default Dashboard;
