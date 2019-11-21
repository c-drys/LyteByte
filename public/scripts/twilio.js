const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

const startedTwilio = function() {
client.messages.create({
  to: '+12368864342',
  from: '+12563776706',
  body: 'You\'re order has been received. We will text shortly when you\'re order is ready for pick up.'
})
.then((message) => console.log(message.sid));
}

const readyTwilio = function () {
client.messages.create({
  to: '+12368864342',
  from: '+12563776706',
  body: 'You\'re order is complete. It is ready for pickup.'
})
.then((message) => console.log(message.sid));
}

module.exports(startedTwilio, readyTwilio)
