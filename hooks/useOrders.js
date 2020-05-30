import useSWR from 'swr';
import fetcher from '~/utils/fetcher';

export default () => {
  const getOrderById = orderid => {
    const { data, error } = useSWR(`/api/orders/${orderid}`, fetcher);
    return {
      order: data,
      error,
    };
  };
  return {
    getOrderById,
  };
};
