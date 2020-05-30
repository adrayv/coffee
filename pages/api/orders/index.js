export default (_, res) => {
  return new Promise(() => {
    setTimeout(() => {
      res.send([
        {
          id: '123',
          customer_name: 'Destin',
          order_name: 'Iced Coffee',
          customer_phone_num: '9517411386',
          created_at: new Date(),
          status: 'Pending',
        },
        {
          id: 'abc',
          customer_name: 'Ivy',
          order_name: 'Hot Chocolate',
          customer_phone_num: '1234567890',
          created_at: new Date(),
          status: 'In Progress',
        },
      ]);
    }, 1000);
  });
};
