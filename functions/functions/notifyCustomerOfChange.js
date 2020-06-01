const functions = require('firebase-functions');

const client = require('twilio')(
  functions.config().twilio.sid,
  functions.config().twilio.token
);

module.exports = functions.firestore
  .document('orders/{orderId}')
  .onUpdate(async (change, context) => {
    try {
      const snap = change.after;

      const {
        customer_phone_num,
        customer_name,
        order_name,
        status,
      } = snap.data();

      const { orderId } = context.params;

      const res = await client.messages.create({
        to: `+1${customer_phone_num}`,
        from: functions.config().twilio.number,
        body: `\n\nHi ${customer_name}. Your ${order_name} is ${String(
          status
        ).toLowerCase()}!\n\nTrack your order here: https://iwantcoffee.now.sh/orders/${orderId}`,
      });

      console.log('TWILIO RESPONSE - NOTIFY CUSTOMER OF CHANGE', res.body);
    } catch (err) {
      console.error('NOTIFY FULFILLER ERROR', err);
    }
    return;
  });
