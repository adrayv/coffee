import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Order from '~/components/Order';
import db from '~/services/firebase/firestore';
import Loader from '~/components/Loader';
import Head from '~/components/AppHead';

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
    return <Loader />;
  }
  return (
    <>
      <Head
        title={`manage order | ${String(order.order_name).toLowerCase()}`}
      />
      <Order
        orderId={orderid}
        orderName={order.order_name}
        orderStatus={order.status}
        customerName={order.customer_name}
        customerPhoneNum={order.customer_phone_num}
        createdDate={order.created_at}
      />
    </>
  );
};
