const { EventEmitter } = require('events');

const ee = new EventEmitter();

//ee.on('event to listen to', () => {} function that is invoked) -- 
//ee.emit('firest the event described in .on)

ee.on('myCoolEvent', () => {
    console.log('1 sec has passed');
});

// ee.emit('myCoolEvent');
setTimeout(() => {
    ee.emit('myCoolEvent'); 
}, 1000);
