const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
  console.log(`RECEIVED: ${data}`);
  data.split('').forEach(console.dir);
});

const data = 'Yes we did';

ee.emit('letter', data);
