const accountSid = 'AC8f1736797f66eaa125831c8e57f6c666';
const authToken = '60d2696d011458da9ac291d7fdcddf83';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: '+12368864342',
  from: '+12563776706',
  body: 'YOOOOOOO, this is coming from my js file!!'
})
.then((message) => console.log(message.sid))

