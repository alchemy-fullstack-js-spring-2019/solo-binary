const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
  console.log(`RECEIVED: ${data}`);
});

const data = 'Hello Dear Friend, how are you?';
const letterArray = data.split('');
letterArray.forEach(letter => {
  ee.emit('letter', letter);
});
