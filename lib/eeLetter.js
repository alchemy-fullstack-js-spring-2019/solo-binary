const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', letter => {
  console.log(`RECEIVED: ${letter}`);
});

const letters = 'hi there';

letters.split('').forEach(letter => {
  ee.emit('letter', letter);
});
