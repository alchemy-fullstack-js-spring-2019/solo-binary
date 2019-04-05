const EventEmitter = require('events');

const ee = new EventEmitter();

class LetterEmitter  extends EventEmitter {
  constructor() {
    super();
  }

  read(str) {
    str.split('').forEach((ltr, offset) => {
      ee.emit('letter object', { ltr, offset });
    });
    this.emit('end');
  }
}


module.exports = LetterEmitter;
