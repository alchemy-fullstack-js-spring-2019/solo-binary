const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('letter', letter => {
  console.log(`RECEIVED: ${letter}`);
});

const aString = 'a red car';
[...aString].forEach(letter => {
  ee.emit('letter', letter);
});
