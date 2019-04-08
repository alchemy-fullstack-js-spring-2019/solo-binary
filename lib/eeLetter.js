const EventEmitter = require('events');

const ee = new EventEmitter();

const phrase = 'hi there';

ee.on('letter', letter => {
  console.log(`RECIEVED: ${letter}`);
});

const splitted = phrase.split('');

splitted.forEach(letter => {
  ee.emit('letter', letter);
});
