const functions = require('firebase-functions');

const client = require('twilio')(
  functions.config().twilio.sid,
  functions.config().twilio.token
);

module.exports = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    try {
      const { customer_name, order_name } = snap.data();

      const { orderId } = context.params;

      const res = await client.messages.create({
        to: functions.config().fulfiller.number,
        from: functions.config().twilio.number,
        body: `\n\n${customer_name} would like you to make a ${order_name}.\n\nManage this order here: https://coffee.now.sh/fulfiller/orders/${orderId}`,
      });

      console.log('TWILIO RESPONSE - NOTIFY FULFILLER', res.body);
    } catch (err) {
      console.error('NOTIFY FULFILLER ERROR', err);
    }
    return;
  });
