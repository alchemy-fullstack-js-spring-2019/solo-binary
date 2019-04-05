const { EventEmitter } = require('events');

class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }

  read(str) {
    [...str].forEach((letter, i) => {
      this.emit('letter', { letter: letter, offset: i });
    });
    this.emit('done');
  }
}

module.exports = {
  LetterEmitter
};
