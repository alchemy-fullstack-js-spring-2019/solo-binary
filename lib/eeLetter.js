const { EventEmitter } = require('events');

const ee = new EventEmitter();


ee.on('letter', letter => {
  console.log(`RECEIVED: ${letter}`);
});

const letters = 'I hope I get this right';

[...letters].forEach(letter => {
  ee.emit('letter', letter);
});
