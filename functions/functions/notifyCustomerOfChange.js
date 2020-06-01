const functions = require('firebase-functions');

const client = require('twilio')(
  functions.config().twilio.sid,
  functions.config().twilio.token
);

module.exports = functions.firestore
  .document('orders/{orderId}')
  .onUpdate(async (snap, context) => {
    try {
      const {
        customer_phone_num,
        customer_name,
        order_name,
        order_status,
      } = snap.data();

      const { orderId } = context.params;

      const res = await client.messages.create({
        to: `+1${customer_phone_num}`,
        from: functions.config().twilio.number,
        body: `Hi ${customer_name}. Your order: ${order_name}, is ${String(
          order_status
        ).toLowerCase()}! Track your order here: https://coffee.now.sh/orders/${orderId}`,
      });

      console.log('TWILIO RESPONSE - NOTIFY CUSTOMER OF CHANGE', res.body);
    } catch (err) {
      console.error('NOTIFY FULFILLER ERROR', err);
    }
    return;
  });
