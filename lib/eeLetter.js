const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', letter => {
    console.log(`RECEIVED: ${letter}`);
});

const hello = 'Hello';

hello.split('').forEach(letter => ee.emit('letter', letter));

