const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
    data.forEach(letterData => {
        letterData.split('');
        console.log(`RECIEVED : ${letterData}`);
    });
});

ee.emit('letter', ['B', 'C', 'A']);
