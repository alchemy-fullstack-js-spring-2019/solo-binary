const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
    console.log(`RECEIVED: ${data}`);
});

const data = 'weird';
const letterArray = data.split('');

letterArray.forEach(letter => {
    ee.emit('letter', letter);
});





