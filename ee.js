const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('userCreated', data => {
  console.log(`notify manager ${data.name}`);
});

ee.on('userCreated', () => {
  console.log('analyzing data');
});

ee.emit('userCreated', { name: 'Tim' });
