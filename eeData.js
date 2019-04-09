const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('this time with data', data => {
  console.log(data);
});

const data = [1, 2, 3];

ee.emit('this time with data', data);
