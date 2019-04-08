const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('We did it!', () => {
  console.log('Yaass!!');
});

ee.emit('We did it');
