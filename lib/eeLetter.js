const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('boop', data => {
    console.log(`RECEIVED: ${data}`);
});

const string = 'this is stuff';
const letters = string.split('');

letters.forEach(letter => {
    ee.emit('boop', letter);
});
