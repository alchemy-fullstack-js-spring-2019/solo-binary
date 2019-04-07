const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('letters', letters => {
  console.log(`RECIEVED: ${letters}`);
});

const letters = 'heresy';

[...letters].forEach(letter => {
  ee.emit('letters', letter);
});
