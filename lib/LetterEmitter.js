const { EventEmitter } = require('events');

class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }

  read(string) {
    [...string].forEach((letter, offset) => {
      this.emit('letter', {
        letter,
        offset
      });
    });

    this.emit('end');
  }
}

module.exports = LetterEmitter;

