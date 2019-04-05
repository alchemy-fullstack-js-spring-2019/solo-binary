// ee.on('myEvent', () => {}) listens to ee.emit
// ee.emit() triggers the event

const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('We heard that', () => {
  console.log('Yep, we heard it');
});

ee.emit('We heard that');
