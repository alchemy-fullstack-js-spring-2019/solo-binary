const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
  console.log(`RECEIVED: ${data}`);
  data.split('').forEach(letter => {
    console.log(letter);
  });
});

const data = 'Yes we did';

ee.emit('letter', data);
