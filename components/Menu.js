import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import MenuItem from 'components/MenuItem';

const { Title } = Typography;

const Layout = styled.div`
  width: 100%;
  & > * {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  & > *:first-child {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export default ({ menuItems, selectedMenuItem, onMenuItemSelect }) => (
  <Layout>
    <Title>Menu</Title>
    {menuItems.map(item => (
      <MenuItem
        isSelected={item.name === selectedMenuItem}
        onClick={onMenuItemSelect}
        name={item.name}
        description={item.description}
      />
    ))}
  </Layout>
);
