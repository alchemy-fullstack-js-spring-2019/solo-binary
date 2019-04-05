const { EventEmitter } = require('events');

const ee = new EventEmitter;

ee.on('sit stitch', data => {
  console.log(`bark bark nope! ${data.response}`);
})

ee.emit('sit stitch', { response: 'no treats'});
