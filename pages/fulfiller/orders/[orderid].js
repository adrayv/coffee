import React, { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Order from '~/components/Order';
import { Select } from 'antd';
import db from '~/services/firebase/firestore';
import Loader from '~/components/Loader';
import Head from 'next/head';

const { Option } = Select;

const OrderStatusChanger = ({ status, onStatusChange }) => (
  <Select value={status} onChange={onStatusChange}>
    <Option value="Pending">Pending</Option>
    <Option value="In Progress">In Progress</Option>
    <Option value="Done">Done</Option>
  </Select>
);

export default () => {
  const [order, setOrder] = useState(null);
  const router = useRouter();
  const { orderid } = router.query;

  useEffect(() => {
    if (orderid) {
      return db
        .collection('orders')
        .doc(orderid)
        .onSnapshot(doc => {
          setOrder(doc.data());
        });
    }
  }, [orderid]);

  const orderStatusChangeHandler = useCallback(
    async newStatus => {
      await db.collection('orders').doc(orderid).update({ status: newStatus });
    },
    [orderid]
  );

  if (!order) {
    return <Loader />;
  }

  return (
    <>
      <Head title={`order | ${String(order.order_name).toLowerCase()}`} />
      <Order
        orderId={order.id}
        orderName={order.order_name}
        orderStatus={order.status}
        customerName={order.customer_name}
        customerPhoneNum={order.customer_phone_num}
        createdDate={order.created_at}
        extra={
          <OrderStatusChanger
            status={order.status}
            onStatusChange={orderStatusChangeHandler}
          />
        }
      />
    </>
  );
};
