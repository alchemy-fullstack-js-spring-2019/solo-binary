const { EventEmitter } = require('events');

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

