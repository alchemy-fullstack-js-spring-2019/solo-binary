const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('we did it', data => {
  /*eslint-disable-next-line*/
  console.log(data);
});

ee.emit('we did it', { data: 'Cool.' });
