import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Menu from '~/components/Menu';
import InputName from '~/components/InputName';
import InputPhoneNum from '~/components/InputPhoneNum';
import { Button } from 'antd';
import Head from '~/components/AppHead';
import Router from 'next/router';
import db from '~/services/firebase/firestore';

const Layout = styled.div`
  display: grid;
  grid-template: max-content max-content / 1fr;
  grid-gap: 20px;
`;

const UserDetailsWrapper = styled.div`
  display: grid;
  grid-template: max-content / repeat(3, 1fr);
  grid-gap: 2%;
  grid-auto-rows: max-content;
`;

export default () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const menuItemSelectHandler = useCallback(
    itemName => {
      if (selectedMenuItem === itemName) {
        setSelectedMenuItem(null);
      } else {
        setSelectedMenuItem(itemName);
      }
    },
    [selectedMenuItem]
  );

  const canSubmit = Boolean(name && phoneNum && selectedMenuItem);

  const submitHandler = useCallback(async () => {
    const order = {
      customer_name: name,
      order_name: selectedMenuItem,
      customer_phone_num: phoneNum,
      created_at: new Date().getTime(),
      status: 'Pending',
    };
    const { id } = await db.collection('orders').add(order);
    Router.push(`/orders/${id}`);
  }, [name, selectedMenuItem, phoneNum]);

  return (
    <Layout>
      <Head title="i want coffee" />
      <UserDetailsWrapper>
        <InputName name={name} onNameChange={setName} />
        <InputPhoneNum phoneNum={phoneNum} onPhoneNumChange={setPhoneNum} />
        <Button
          type="primary"
          block
          disabled={!canSubmit}
          onClick={submitHandler}
        >
          Place Order
        </Button>
      </UserDetailsWrapper>
      <Menu
        menuItems={[
          { name: 'Hot Chocolate', description: 'a drink' },
          { name: 'Hot Mocha Coffee', description: 'a drink' },
          { name: 'Iced Mocha Coffee', description: 'with milk' },
          { name: 'Hot Mocha Latte', description: 'a drink' },
          { name: 'Iced Mocha Latte', description: 'a drink' },
          { name: 'Hot Hazelnut Coffee', description: 'a drink' },
          { name: 'Iced Hazelnut Coffee', description: 'a drink' },
          { name: 'Hot Hazelnut Latte', description: 'a drink' },
          { name: 'Iced Hazelnut Latte', description: 'a drink' },
          { name: 'Hot Coffee', description: 'a drink' },
          { name: 'Iced Coffee', description: 'a drink' },
          { name: 'Hot Latte', description: 'a drink' },
          { name: 'Iced Latte', description: 'a drink' },
          { name: 'Hot Americano', description: 'with milk' },
          { name: 'Iced Americano', description: 'with milk' },
          { name: 'Single Espresso Shot', description: 'with milk' },
          { name: 'Double Espresso Shot', description: 'with milk' },
          { name: 'Hot Hibiscus Tea', description: 'with milk' },
          { name: 'Iced Hibiscus Tea', description: 'with milk' },
          { name: 'Hot English Breakfast Tea', description: 'with milk' },
          { name: 'Iced English Breakfast Tea', description: 'with milk' },
        ]}
        selectedMenuItem={selectedMenuItem}
        onMenuItemSelect={menuItemSelectHandler}
      />
    </Layout>
  );
};
