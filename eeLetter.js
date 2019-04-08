const { EventEmitter } = require('events');

const ee = new EventEmitter();



const string = 'Greetings';

for(let i = 0; i < string.length; i++) {
  const char = string.split('');
  ee.on('letter', () => {
    console.log(`RECEIVED: ${char[i]}`);
  });
}

ee.emit('letter');
