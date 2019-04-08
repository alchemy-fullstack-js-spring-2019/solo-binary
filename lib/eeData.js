const eventEmitter = require('events');

const ee = new eventEmitter();

const data = { name: 'Sean', age:'27'};

ee.on('dataEvent', () => {
  console.log(data);
});

ee.emit('dataEvent');