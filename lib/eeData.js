const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('something exciting', data => {
    console.log(data);
});

ee.emit('something exciting', { classCancelled: true });
