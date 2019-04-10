const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('myCoolEvent', () => {
  console.log('Hey.');
});

ee.emit('myCoolEvent');
