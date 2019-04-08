const { EventEmitter } = require('events');
const http = require('http');

const ee = new EventEmitter();

ee.on('myCoolEvent', () => {
  console.log('hi');
});

ee.on('myCoolEvent', () => {
  console.log('bye');
});

setInterval(() => {
  ee.emit('myCoolEvent');
}, 2000);





















http.createServer((req, res) => {
  if(req.url === '/user') {
    ee.emit('userPage');
  } else {
    ee.emit('anotherPage');
  }

  res.end();
});
