const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('myCoolEvent', () => {
  console.log('hihihihi');
});

ee.emit('myCoolEvent');
