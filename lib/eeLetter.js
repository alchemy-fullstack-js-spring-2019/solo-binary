const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('letter', letter => {
  console.log(`RECEIVED: ${letter}`);
});

const str = 'holy smokes';
const strArray = str.split('');

strArray.forEach(letter => {
  if(letter !== ' ') ee.emit('letter', letter);
});


