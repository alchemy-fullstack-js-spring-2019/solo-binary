const { EventEmitter } = require('events');

module.exports =  class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }
  read(str) {
    str.split('').forEach((letter, i) => {
      this.emit('letter', { letter: letter, offset: i });
    });
  }
};
