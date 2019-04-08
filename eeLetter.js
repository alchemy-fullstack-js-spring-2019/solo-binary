const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
  console.log(`RECEIVED: ${data}`);
});

const letters = 'There are so many letters';

const lettersNoSpace = letters.split(' ').join('');

lettersNoSpace.split('').forEach(letter => {
  ee.emit('letter', letter);
});
