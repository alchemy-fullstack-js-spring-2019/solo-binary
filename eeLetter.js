const EventEmitter = require('events');

const ee = new EventEmitter();

const letters = 'Mal';

ee.on('letters', data => {
  console.log(`RECEIVED ${data}`);
});

letters.split('').forEach(letter => {
  ee.emit('letters', letter);
});
