const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('things and stuff!', ()=> {
/* eslint-disable-next-line */
    console.log('and even more');
});

ee.emit('things and stuff!');
