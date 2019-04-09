const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('things with DATA!', data => {
    console.log(data);
});

ee.emit('things with DATA!', ['i am data', 'i am more data']);
