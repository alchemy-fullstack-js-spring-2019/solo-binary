const { EventEmitter } = require('events');

const ee = new EventEmitter;

ee.on('sit stitch', () => {
  console.log('bark bark nope!');
});

ee.emit('sit stitch');

