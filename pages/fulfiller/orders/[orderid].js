import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import GlobalLayout from '~/components/GlobalLayout';
import Order from '~/components/Order';
import { Select, Empty } from 'antd';

const { Option } = Select;

export default () => {
  const router = useRouter();
  const { orderid } = router.query;
  const { getOrderById, updateOrderStatus } = useOrder();
  const order = getOrderById(orderid);

  const orderStatusChangeHandler = useCallback(
    newStatus => {
      updateOrderStatus(orderid, newStatus);
    },
    [updateOrderStatus, orderid]
  );

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
      <Select value={order && order.status} onChange={orderStatusChangeHandler}>
        <Option value="Pending">Pending</Option>
        <Option value="In Progress">In Progress</Option>
        <Option value="Done">Done</Option>
      </Select>
    </GlobalLayout>
  );
};
