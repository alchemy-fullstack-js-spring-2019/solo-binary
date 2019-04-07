const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('we did it', () => {
  console.log('Yeet');
});

ee.emit('we did it');
