import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '~/components/GlobalLayout';
import useOrders from '~/hooks/useOrders';
import Order from '~/components/Order';
import { Select } from 'antd';

const { Option } = Select;

export default () => {
  const router = useRouter();
  const { orderid } = router.query;
  const { getOrderById, changeOrderStatus } = useOrders();
  const { order, error } = getOrderById(orderid);
  if (error) {
    return <p>issue loading order</p>;
  }

  const orderStatusChangeHandler = useCallback(
    newStatus => {
      changeOrderStatus(orderid, newStatus);
    },
    [changeOrderStatus, orderid]
  );

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
      <Select value={order && order.status} onChange={orderStatusChangeHandler}>
        <Option value="Pending">Pending</Option>
        <Option value="In Progress">In Progress</Option>
        <Option value="Done">Done</Option>
      </Select>
    </GlobalLayout>
  );
};
