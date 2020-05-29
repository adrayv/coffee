import React from 'react';
import Link from 'next/link';
import Head from '../components/Head';
import styled from 'styled-components';
import { Button } from 'antd';
import GlobalLayout from '../components/GlobalLayout';

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
      <Link href="/fulfiller/orders">
        <Button>View Past Orders</Button>
      </Link>
    </Layout>
  </GlobalLayout>
);

export default Home;
