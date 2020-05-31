import React from 'react';
import { Empty, List, Typography } from 'antd';
import GlobalLayout from '~/components/GlobalLayout';
import Router from 'next/router';
import useOrder from '~/hooks/useOrder';
const { Item } = List;
const { Text } = Typography;

export default () => {
  const { getOrders } = useOrder();
  const orders = getOrders();
  if (!orders) {
    return <Empty />;
  }
  return (
    <GlobalLayout>
      <List
        dataSource={orders}
        renderItem={order => (
          <Item onClick={() => Router.push(`/fulfiller/orders/${order.id}`)}>
            <Text>{order.order_name}</Text>
          </Item>
        )}
      />
    </GlobalLayout>
  );
};
