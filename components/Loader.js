import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Center = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;
export default () => (
  <Center>
    <Spin />
  </Center>
);
