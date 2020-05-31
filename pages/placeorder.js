import React, { useState, useCallback } from 'react';
import GlobalLayout from '~/components/GlobalLayout';
import Menu from '~/components/Menu';
import InputName from '~/components/InputName';
import InputPhoneNum from '~/components/InputPhoneNum';
import { Button } from 'antd';
import Head from '~/components/AppHead';
import Router from 'next/router';
import db from '~/services/firebase/firestore';

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
    <GlobalLayout>
      <Head title="Place an Order" />
      <Menu
        menuItems={[
          { name: 'Coffee', description: 'a drink' },
          { name: 'Latte', description: 'with milk' },
        ]}
        selectedMenuItem={selectedMenuItem}
        onMenuItemSelect={menuItemSelectHandler}
      />
      <InputName name={name} onNameChange={setName} />
      <InputPhoneNum phoneNum={phoneNum} onPhoneNumChange={setPhoneNum} />
      <Button type="primary" disabled={!canSubmit} onClick={submitHandler}>
        Place Order
      </Button>
    </GlobalLayout>
  );
};
