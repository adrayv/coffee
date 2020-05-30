export default (req, res) => {
  const {
    query: { orderid },
  } = req;
  return new Promise(() => {
    setTimeout(() => {
      res.send({
        id: orderid,
        customer_name: 'Destin',
        order_name: 'Iced Coffee',
        customer_phone_num: '9517411386',
        created_at: new Date(),
      });
    }, 1000);
  });
};
