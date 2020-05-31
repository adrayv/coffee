import React from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '~/components/GlobalLayout';
import Order from '~/components/Order';
import useOrder from '~/hooks/useOrder';
import { Empty } from 'antd';

export default () => {
  const router = useRouter();
  const { orderid } = router.query;
  const { getOrderById } = useOrder();
  const order = getOrderById(orderid);
  if (!order) {
    return <Empty />;
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
