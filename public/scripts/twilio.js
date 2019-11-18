const accountSid = 'AC8f1736797f66eaa125831c8e57f6c666';
const authToken = '60d2696d011458da9ac291d7fdcddf83';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: '+12368864342',
  from: '+12563776706',
  body: 'You\'re order has been received. We will text shortly when you\'re order is ready for pick up.'
})
.then((message) => console.log(message.sid))

