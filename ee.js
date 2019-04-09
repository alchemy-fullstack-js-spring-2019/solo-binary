const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('success', () => {
  console.log('mission success');
});

ee.emit('success');

