const { EventEmitter } = require('events');

const ee = new EventEmitter();

// // ee.on(); - similar to addEventListener()
// // ee.on('myEvent', () => {}) - takes action after event happens

// ee.on('myCoolEvent', () => {
//     console.log('hihihihih');
// });

// ee.emit('myCoolEvent');
// // ee.emit() - actually fires an event


ee.on('userCreated', data => {
    console.log(`new user is ${data.name}`);
});

ee.emit('userCreated', { name: 'megan' });



