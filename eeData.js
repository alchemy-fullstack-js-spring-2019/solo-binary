const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('we did it with data', data => console.log(data));

const data = 'Yes we did';

ee.emit('we did it with data', data);
