const { EventEmitter } = require('events');

const ee = new EventEmitter;

const letters = 'stitch';

ee.on('letters', data => {
  console.log(`RECEIVED: ${data}`)
})

letters.split('').forEach(letter => {
  ee.emit('letters', letter);
})
