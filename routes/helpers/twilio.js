
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

const startedTwilio = function(phoner) {
  return client.messages.create({
    to: `+1${phoner}`,
    from: '+12563776706',
    body: 'Your order has been received. We will text shortly when your order is ready for pick up.'
  })
  //.then((message) => console.log(message.sid));
}

const readyTwilio = function (phoner) {
  return client.messages.create({
    to: `+1${phoner}`,
    from: '+12563776706',
    body: 'Your order is complete. It is ready for pickup.'
  })
  .then((message) => console.log(message.sid));
}

module.exports = {startedTwilio, readyTwilio}
