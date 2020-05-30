import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export default ({
  isLoading,
  orderName,
  orderId,
  orderStatus,
  customerName,
  customerPhoneNum,
  createdDate,
}) => (
  <div>
    <Card style={{ width: '100%' }} loading={isLoading}>
      {!isLoading && (
        <>
          <Meta title={orderName} description={orderId} />
          <p>status: {orderStatus}</p>
          <p>{customerName}</p>
          <p>{customerPhoneNum}</p>
          <p>{createdDate}</p>
        </>
      )}
    </Card>
  </div>
);
