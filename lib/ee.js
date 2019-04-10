const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('myCoolEvent', () => {
  /*eslint-disable-next-line*/
  console.log('hihihihi');
});

ee.emit('myCoolEvent');
