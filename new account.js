const ee = require('./ee');

ee.on('userCreated', () => {
  console.log('notify someone');
});
