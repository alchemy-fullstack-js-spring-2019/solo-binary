const { EventEmitter } = require('events');
const ee = new EventEmitter();

const letters = 'cool string';


ee.on('letter', letter => {
    console.log(`RECEIVED: ${letter}`);
});

[...letters].forEach(letter => {
    ee.emit('letter', letter);
});

