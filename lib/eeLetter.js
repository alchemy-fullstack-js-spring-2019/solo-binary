const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', letter => {
  console.log(`RECEIVED: ${letter}`);
});

const letters = 'hi there';

[...letters].forEach(letter => {
  ee.emit('letter', letter);
});

// handle event with a callback that prints 
// - "received: ${letter}"

// iterate through the letters in a string and emit 'forEach' letter
// HINT: You'll need to use split('') and forEach
