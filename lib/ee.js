const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('myCoolEvent', () => {
    console.log('1 sec has passed');
});

setTimeout(() => {
    ee.emit('myCoolEvent'); 
}, 1000);
