const { EventEmitter } = require('event');

const ee = new EventEmitter();

const letters = 'hi there';


ee.on('myEvent', () => {
  console.log('hihihihi');
});

setInterval(() => {
  ee.emit('myEvent');
}, 2000);

module.exports = {
  ee
};
