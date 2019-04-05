const { EventEmitter } = require('events');

module.expots = class LetterEmitter extends EventEmitter {
  constructor() {
    // WHAT AM I DOING????
    super();
  }

  read(str) {
    str.split('').forEach(letter => {
      ee.emit('letter', letter);
      
    });

  }
};
