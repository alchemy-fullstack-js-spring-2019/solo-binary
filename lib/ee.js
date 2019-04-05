const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on('win', () => {
    console.log('won');
});

ee.emit('win');
