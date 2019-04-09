const EventEmitter = require('events');

const ee = new EventEmitter();


ee.on('success with data', data => {
  console.log(data);
});

ee.emit('success with data', 'I am testing my data')