import React from 'react';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const { orderid } = router.query;
  return <h1>Hi fulfiller, order status for order: {orderid}</h1>;
};
