import useSWR, { mutate } from 'swr';
// import fetcher from '~/utils/fetcher';
import uniqid from 'uniqid';

const localFetcher = path => JSON.parse(localStorage.getItem(path));

export default () => {
  const getOrderById = orderid => {
    const { data, error } = useSWR(`/api/orders/${orderid}`, localFetcher);
    return {
      order: data,
      error,
    };
  };
  const getOrders = () => {
    const { data, error } = useSWR('/api/orders', localFetcher);
    return {
      orders: data || [],
      error,
    };
  };
  const placeOrder = (name, phoneNum, selectedMenuItem) => {
    const orderId = uniqid();
    const order = {
      id: orderId,
      customer_name: name,
      order_name: selectedMenuItem,
      customer_phone_num: phoneNum,
      created_at: new Date(),
      status: 'Pending',
    };
    const orders = JSON.parse(localStorage.getItem('/api/orders')) || [];
    orders.push(order);
    localStorage.setItem(`/api/orders`, JSON.stringify(orders));
    localStorage.setItem(`/api/orders/${orderId}`, JSON.stringify(order));
    return orderId;
  };
  const changeOrderStatus = (id, status) => {
    const order = JSON.parse(localStorage.getItem(`/api/orders/${id}`));
    const orders = JSON.parse(localStorage.getItem('/api/orders')) || [];
    const orderIndex = orders.findIndex(order => order.id === id);
    orders[orderIndex] = { ...orders[orderIndex], status };
    order.status = status;
    localStorage.setItem(`/api/orders/${id}`, JSON.stringify(order));
    localStorage.setItem(`/api/orders`, JSON.stringify(orders));
    mutate('/api/orders');
    mutate(`/api/orders/${id}`);
  };
  return {
    getOrderById,
    getOrders,
    placeOrder,
    changeOrderStatus,
  };
};
