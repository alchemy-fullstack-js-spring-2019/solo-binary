const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('myEvent', () => {
    console.log('the event has been emitted');
});

ee.emit('myEvent');





