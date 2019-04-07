const { EventEmitter } = require('events');

module.exports = class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }
  read(str) {
    //instead of letters, we have str
    [...str].forEach((letter, offset) => {
      // ee.emit you have emit as one of your (this) methods
      ee.emit('letter', letter);
    });
  }
};

module.exports = { LetterEmitter };
