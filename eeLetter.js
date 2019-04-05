const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('letter', data => {
  console.log(`RECEIVED: ${data}`);
});

const data = 'Hello Dear Friend, how are you?';
const letterArray = data.split('');
letterArray.forEach(letter => {
  ee.emit('letter', letter);
});


module.exports = class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }
  read(str) {
    [...str].forEach((letter, offset) => {
      this.emit('letter', {
        letter,
        offset
      });
    });
    this.emit('end');
  }
};
