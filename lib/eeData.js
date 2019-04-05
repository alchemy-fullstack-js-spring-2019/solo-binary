const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('done with data', data => {
    console.log([2, 1 ]);
});

ee.emit('done with data');