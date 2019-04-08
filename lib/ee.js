const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('things and stuff!', ()=> {
    console.log('and even more');
});

ee.emit('things and stuff!');
