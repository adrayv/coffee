import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
} from 'react';
import uniqid from 'uniqid';

const Context = createContext();

const { Provider } = Context;

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log('ORDER PROVI', orders);
  }, [orders]);

  const getOrders = useCallback(() => {
    if (orders.length === 0) return null;
    return orders;
  }, [orders]);

  const getOrderById = useCallback(
    id => {
      return orders.find(order => order.id === id);
    },
    [orders]
  );

  const createOrder = useCallback((name, phoneNum, selectedMenuItem) => {
    const orderId = uniqid();
    setOrders(prevOrders => {
      const order = {
        id: orderId,
        customer_name: name,
        order_name: selectedMenuItem,
        customer_phone_num: phoneNum,
        created_at: new Date(),
        status: 'Pending',
      };
      return [...prevOrders, order];
    });
    return orderId;
  }, []);

  const updateOrderStatus = useCallback((id, status) => {
    setOrders(prevOrders => {
      const newOrders = [...prevOrders];
      const orderIndex = prevOrders.findIndex(o => o.id === id);
      newOrders[orderIndex] = {
        ...newOrders[orderIndex],
        status,
      };
      return newOrders;
    });
  }, []);

  return (
    <Provider
      value={{ getOrders, getOrderById, updateOrderStatus, createOrder }}
    >
      {children}
    </Provider>
  );
};

export default () => useContext(Context);
