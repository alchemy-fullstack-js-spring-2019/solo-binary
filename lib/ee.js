const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('we did it', () => {
    console.log('yes we did!');
});

ee.emit('we did it');

