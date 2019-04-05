const { EventEmitter } = require('events');

module.exports = class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }

  read(str) {
    // this.emit()
    [...str].forEach((letter, offset) => {
      this.emit('letter', {
        letter,
        offset
      });
    });
    this.emit('end');
  }

};
