import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '~/components/GlobalLayout';
import Order from '~/components/Order';
import useOrder from '~/hooks/useOrder';
import { Empty } from 'antd';
import db from '~/services/firebase/firestore';

export default () => {
  const [order, setOrder] = useState(null);
  const router = useRouter();
  const { orderid } = router.query;

  useEffect(() => {
    if (orderid) {
      (async () => {
        const order = await db.collection('orders').doc(orderid).get();
        setOrder(order.data());
      })();
    }
  }, [orderid]);

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
