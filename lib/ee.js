const { EventEmitter } = require('events');

const ee = new EventEmitter();

// ee.on('event', () => {}) listens to events similar to addEventListener() in vanilla JS
// ee.emit() triggers an event

ee.on('myCoolEvent', () => {
  console.log('hihihihi');
});

// won't do anything by itself
// you need to emit an event, see below

ee.emit('myCoolEvent');
