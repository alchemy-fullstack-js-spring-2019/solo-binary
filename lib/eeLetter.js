const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on('letter', data => {
  console.log(`RECEIVED: ${data}`);
});

ee.on('letter', data => {
  data.split('').forEach(letter => console.log(letter));
});

ee.emit('letter', 'hello');
