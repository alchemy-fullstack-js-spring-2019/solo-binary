const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('myevent', (data) => {
  console.log(data);
});

setTimeout(() => {
  ee.emit('myevent', { name: 'dogg' });
}, 1000);



//addEventListener('click', () => {})
//ee.on('myEvent', () => {}) <-- 'myEvent' is the event you are listening for.
//ee.emit() <--eit the event you are listening for.
