const { EventEmitter } = require('events');

const ee = new EventEmitter();

// ee.on('letter', letter => {
//   console.log(`RECEIVED: ${letter}`);
// });

// const letters = 'hi'


MY CODE
const string = 'Greetings';

for(let i = 0; i < string.length; i++) {
  const char = string.split('');
  ee.on('letter', data => {
    console.log(`RECEIVED: ${char[i]}`);
  });
}

ee.emit('letter');
