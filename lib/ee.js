const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('userCreated', data => {
    console.log(`new user is ${data.name}`);
});

ee.emit('userCreated', { name: 'megan' });



