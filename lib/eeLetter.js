const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('letter', letter => {
  console.log(letter);
});

'hello'.split('').forEach(letter => ee.emit('letter', letter));
