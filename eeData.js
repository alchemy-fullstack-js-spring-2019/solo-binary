const { EventEmitter } = require('events');

const ee = new EventEmitter;

ee.on('sit stitch', data => {
  console.log('bark bark nope!', data);
})

ee.emit('sit stitch', 'no treats!');
