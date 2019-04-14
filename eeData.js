const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('we did it with data', data => {
  console.log(`hooray ${data.name}`);
});

ee.emit('we did it with data', { name: 'Mal' });
