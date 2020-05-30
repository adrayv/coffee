import React from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '~/components/GlobalLayout';
import useOrders from '~/hooks/useOrders';
import Order from '~/components/Order';

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
      <Order
        isLoading={!order}
        orderId={order && order.id}
        orderName={order && order.order_name}
        orderStatus={order && order.status}
        customerName={order && order.customer_name}
        customerPhoneNum={order && order.customer_phone_num}
        createdDate={order && order.created_at}
      />
    </GlobalLayout>
  );
};
