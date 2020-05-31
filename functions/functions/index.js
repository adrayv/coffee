const functions = require('firebase-functions');

const client = require('twilio')(
  functions.config().twilio.sid,
  functions.config().twilio.token
);

exports.notifyFulfiller = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    try {
      const {
        customer_phone_num,
        customer_name,
        order_name,
        status,
      } = snap.data();

      const res = await client.messages.create({
        to: `+1${customer_phone_num}`,
        from: functions.config().twilio.number,
        body: `Hi ${customer_name}. Your ${order_name}, is ${status}!`,
      });

      console.log('RESPONSE', res.body);
      console.log('CONTEXT', context.params.orderId);
    } catch (err) {
      console.error('NOTIFY FULFILLER ERROR', err);
    }
    return;
  });
