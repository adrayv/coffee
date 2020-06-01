import React from 'react';
import styled from 'styled-components';
import MenuItem from '~/components/MenuItem';

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
