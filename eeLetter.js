const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('letter', letter => {
  console.log(`RECEIVED: ${letter}`);
});

const aString = 'a red car';
[...aString].forEach(letter => {
  ee.emit('letter', letter);
});

// You need to emit data on your emitter so something like ee.emit('example', dataHere), and 
// you need to capture that data on your listener so something like ee.on('example', captureData => {...});
