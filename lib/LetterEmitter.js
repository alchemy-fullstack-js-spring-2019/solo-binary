const EventEmitter = require('events');

const ee = new EventEmitter();

class LetterEmitter  extends EventEmitter {
  constructor() {
    super();
  }

  read(str) {
    const strArray = str.split('');
    strArray.forEach(ltr => {
      ee.emit('letter object', { letter: ltr, offset: 20 });
    });
  }
}


module.exports = LetterEmitter;
