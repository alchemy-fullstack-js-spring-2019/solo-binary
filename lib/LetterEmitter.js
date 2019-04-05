const { EventEmitter } = require('events');

module.exports = class LetterEmitter extends EventEmitter {
  constructor() {
    super(); // will call EventEmitter constructor
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
