
const { EventEmitter } = require('events');

const letter = 'hey';

const data = 'some string';

const ee = new EventEmitter();

ee.on('letter', letter => {
    console.log(`RECIEVED': ${letter}`);
});

[...letter].forEach(letter => {
    ee.emit('letter', letter);
});







