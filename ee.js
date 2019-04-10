
const { EventEmitter } = require('events');

const ee = new EventEmitter();


ee.on('letter', letter => {
  return (`RECIEVED': ${letter}`);
});

const letters = 'whats up';

[...letters].forEach(letter => {
  ee.emit('letter', letter);
});







