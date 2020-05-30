import React from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '~/components/GlobalLayout';
import useOrders from '~/hooks/useOrders';
import { Card } from 'antd';

const { Meta } = Card;

export default () => {
  const router = useRouter();
  const { orderid } = router.query;
  const { getOrderById } = useOrders();
  const { order, error } = getOrderById(orderid);
  if (error) {
    return <p>issue loading order</p>;
  }
  return (
    <GlobalLayout>
      <div>
        <Card style={{ width: '100%' }} loading={!order}>
          {order && (
            <>
              <Meta
                title={order.order_name}
                description="This is the description"
              />
              <p>{order.id}</p>
              <p>{order.customer_name}</p>
              <p>{order.order_name}</p>
              <p>{order.customer_phone_num}</p>
              <p>{order.created_at}</p>
            </>
          )}
        </Card>
      </div>
    </GlobalLayout>
  );
};
