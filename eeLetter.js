const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
  console.log(`RCEIVED: ${data}`);
});

const data = 'Hello Dear Friend, how are you?';

ee.emit('letter', data);
