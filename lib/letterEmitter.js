const { EventEmitter } = require('events');
const ee = new EventEmitter();

module.exports = class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }
  read(str) {
    //instead of letters, we have str
    str.split('').forEach((letter, offset) => {
      this.emit('letter', { letter, 
        offset });
      console.log(letter);
    });
    this.emit('end');
  }
};

