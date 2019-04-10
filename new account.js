const ee = require('./ee');

ee.on('userCreated', () => {
  throw ('notify someone');
});
