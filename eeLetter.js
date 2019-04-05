const { EventEmitter } = require('events');

const ee = new EventEmitter;
const word = 'banana';
const string = word.split('');

ee.on('letterFound', data => {
  console.log(`Received ${data}`);
});

string.forEach((letter) => {
  ee.emit('letterFound', letter);
});
