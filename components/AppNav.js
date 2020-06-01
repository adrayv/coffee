import React from 'react';
import Link from 'next/link';
import { Typography } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 10px calc(3% + 10px);
  background: white;
  border-bottom: 0.5px solid #efefef;
`;

export default () => (
  <Layout>
    <Link href="/">
      <CoffeeOutlined style={{ color: '#1890ff', fontSize: '23px' }} />
    </Link>
  </Layout>
);
