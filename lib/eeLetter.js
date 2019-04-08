const EventEmitter = require('events');
const ee = new EventEmitter();

const letters = 'bummer';
const split = letters.split('');

ee.on('letter', (letter) => {
  console.log(`recieved ${letter}`);
});

split.forEach(letter => {
  ee.emit('letter', letter);
});

