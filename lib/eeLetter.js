const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
  data.split('').forEach(letter => {
    if(letter === ' ') return;
    console.log(`RECEIVED: ${letter}`);
  });
});

ee.emit('letter', 'throw poop');
