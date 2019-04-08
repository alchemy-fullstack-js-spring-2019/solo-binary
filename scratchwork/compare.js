const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', (userObj) => {
    console.log('hello ' + userObj.name);
});

const userObj = {
    name: 'fran'
};

const obj = () => console.log('im an obj! ');
ee.on('letter', obj);

ee.emit('letter', userObj);
