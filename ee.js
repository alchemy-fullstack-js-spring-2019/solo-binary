const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('myevent', (data) => {
  console.log(data);
});

setTimeout(() => {
  ee.emit('myevent', { name: 'dogg' });
}, 1000);


