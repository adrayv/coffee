import React from 'react';
import Link from 'next/link';
import Head from '~/components/AppHead';
import styled from 'styled-components';
import { Button } from 'antd';
import GlobalLayout from '~/components/GlobalLayout';

const Layout = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-auto-rows: max-content;
`;

const Home = () => (
  <GlobalLayout>
    <Head title="iwantcoffee" />
    <Layout>
      <Link href="/placeorder">
        <Button type="primary">Place Order</Button>
      </Link>
    </Layout>
  </GlobalLayout>
);

export default Home;
