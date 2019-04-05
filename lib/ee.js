const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('userCreated', data => {
  console.log(`notify manager ${data.name}`);
});

ee.on('userCreated', data => {
  console.log('analyzing data');
});

ee.emit('userCreated', { name: 'Name' });

// ee.on('myCoolEvent', () => {
//   console.log('Hello.');
// });

// ee.emit('myCoolevent');

// addEventListener('click', () => {});
// ee.on('myEvent', () => {});
// ee.emit()
