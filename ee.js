const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('hooray', () => {
  console.log('oooh yeah baby');
});

ee.emit('hooray');
