import React from 'react';
import useOrders from '~/hooks/useOrders';
import { Empty, List, Typography } from 'antd';
import GlobalLayout from '~/components/GlobalLayout';
import Router from 'next/router';
const { Item } = List;
const { Text } = Typography;

export default () => {
  const { getOrders } = useOrders();
  const { orders, error } = getOrders();
  if (error) {
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
