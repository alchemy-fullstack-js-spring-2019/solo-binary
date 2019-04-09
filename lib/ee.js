const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('word received', () => {
  console.log('word.');
});

ee.emit('word received');






