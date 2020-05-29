import React from 'react';
import Link from 'next/link';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const Layout = styled.div`
  width: 100vw;
  background: lightcoral;
  box-sizing: border-box;
  padding: 10px;
`;

export default () => (
  <Layout>
    <Link href="/">
      <Text style={{ cursor: 'pointer' }}>iwantcoffee</Text>
    </Link>
  </Layout>
);
